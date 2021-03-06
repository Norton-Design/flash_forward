# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  mod_status      :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :mod_status, inclusion: [true, false]
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token
    # FIGVAPER
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        digest_pass = BCrypt::Password.new(self.password_digest)
        digest_pass.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    has_many :route_moderators,
    foreign_key: :mod_id,
    class_name: :RouteModerator

    has_many :moderated_routes,
    through: :route_moderators,
    source: :route

    has_many :shared_routes,
    foreign_key: :shared_by,
    class_name: :Route

    has_many :comments,
    foreign_key: :user_id,
    class_name: :RouteComment

    has_one :sharer,
    foreign_key: :shared_by_id,
    class_name: :Area

    has_many :area_moderators,
    foreign_key: :user_id,
    class_name: :AreaModerator

    has_many :moderated_areas,
    through: :area_moderators,
    source: :area
end
