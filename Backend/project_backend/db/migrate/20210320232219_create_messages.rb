class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :username
      t.string :category
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
