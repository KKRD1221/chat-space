## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|e-mail|integer|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :chats

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|

### Association
- has_many :users, through: 
:groups_users
- has_many :chats

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :user
- belong_to :group

## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belong_to :user
