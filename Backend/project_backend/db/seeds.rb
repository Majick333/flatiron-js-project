# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.create([{
    username: 'test username 1',
    category: 'category 1',
    title: 'title 1',
    content: 'test content 1'}, 
    {username: 'test user 2', 
    category: 'category 2',
    title: ' title no. TWO',
    content: 'another test'},
    username: 'user 3',
    category: 'category 3',
    title: 'title #3',
    content: 'content for message #3'])

Comment.create( [{
    username: 'commentor 1',
    content: 'reply 1',
    message_id: 1},
    {username: 'commentor 2',
    content: 'reply 2',
    message_id: 2},
    {username: 'commentor 3',
    content: 'reply 3',
    message_id: 1},
    {username: 'commentor 4',
    content: 'reply 4',
    message_id: 2},
    {username: 'commentor 1',
    content: 'reply 5',
    message_id: 1},
    {username: 'commentor 2',
    content: 'reply 7',
    message_id: 2},
     ])