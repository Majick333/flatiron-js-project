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
    title: 'General',
    content: 'test content 1'}, 
    {username: 'test user 2', 
    category: 'category 2',
    title: 'Good Morning',
    content: 'another test'},
    username: 'user 3',
    category: 'Hello There',
    title: 'title #3',
    content: 'content for message #3'])

Comment.create( [{
    username: 'commentor 1',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio magna, pellentesque nec nisi et, blandit eleifend eros. Nulla metus mi, tempor sed nulla at, pharetra ornare diam. Quisque vitae ipsum vitae magna ullamcorper congue sit amet in purus. Nulla pellentesque dolor vitae orci vestibulum vestibulum. Sed eget nisi eu justo volutpat scelerisque. Mauris imperdiet erat nec mauris hendrerit, et commodo turpis consectetur. Vivamus nec porta felis. Nam accumsan, felis eget consequat malesuada, eros risus cursus eros, ut tincidunt nibh lorem sed diam. Morbi interdum quam ac ipsum rhoncus efficitur. Morbi tortor magna, gravida vel justo vel, faucibus sollicitudin dolor. Sed efficitur libero sit amet tempus suscipit. Duis vitae magna placerat, pellentesque nulla et, pharetra arcu. Etiam eu consectetur erat. Duis ut nulla vel sapien cursus finibus. Vestibulum ornare mauris eros, imperdiet viverra nulla blandit in.

    Sed blandit a urna et lobortis. Nullam pretium bibendum urna, nec gravida leo sagittis ut. Aliquam a interdum eros. Vivamus a metus efficitur, fermentum orci vel, viverra justo. Sed pharetra, magna a sodales venenatis, nisi lectus rhoncus mauris, volutpat eleifend felis lorem at orci. Nulla quis ultrices ex. Nunc enim nibh, euismod sed quam eget, tristique scelerisque dolor. Proin sed nisi in erat volutpat condimentum. Aenean et odio commodo, sagittis augue vel, iaculis dolor. Duis sed dui id diam pretium suscipit eu id urna. Aliquam vehicula lacus a turpis dapibus egestas sit amet a turpis. Phasellus vitae nunc commodo, porttitor lorem ut, porttitor mi. Proin bibendum eros quis erat tempor, ac tincidunt ante tempor. Fusce sed augue et dolor rhoncus sollicitudin. Ut cursus nisl non arcu viverra lobortis. Duis posuere augue dictum felis placerat feugiat.
    
    Nullam varius, ipsum eget sodales lacinia, erat libero ultricies felis, sed lobortis dolor dui sed massa. Vivamus turpis enim, ultricies sit amet lacus accumsan, semper tincidunt nunc. Duis justo nunc, tempus ac imperdiet ut, interdum vel odio. Pellentesque venenatis scelerisque quam, sit amet facilisis dolor mattis eu. Integer aliquet vehicula tincidunt. Nulla facilisi. Morbi eleifend tempor lobortis. Curabitur dui libero, ullamcorper ut sem a, tempor cursus diam. Praesent eget nibh et augue interdum convallis. Vivamus porttitor iaculis nisi in porttitor. Curabitur a urna in elit egestas lacinia. Aliquam quam odio, fringilla sed luctus a, luctus at eros. Ut at ligula venenatis, ultrices nunc quis, interdum odio. Etiam porttitor sem metus, nec pellentesque metus molestie sit amet. Sed neque enim, fermentum eget rutrum eget, pellentesque a nibh. Maecenas purus metus, aliquet ut lacinia in, sagittis et nisl.
    
    Etiam tincidunt convallis risus, nec viverra ante varius suscipit. Nullam non est dui. Fusce vel lacus erat. Aenean metus lorem, malesuada eu quam fringilla, suscipit porttitor purus. Sed nec erat eget orci volutpat lobortis. Sed justo ipsum, finibus vel mauris eu, porttitor iaculis justo. Phasellus nec dolor leo. Vestibulum quis porta nulla, in feugiat ante. Nullam tristique tortor ligula, sit amet rhoncus libero sollicitudin rutrum. Nunc mattis iaculis gravida. Curabitur id ipsum sit amet diam scelerisque fermentum. Nunc finibus accumsan molestie.
    
    Nulla pulvinar scelerisque quam ac tempor. Aliquam lacinia tellus ut suscipit lobortis. Pellentesque cursus elit risus, at bibendum dui varius non. Suspendisse at lorem sed eros dignissim luctus vitae laoreet leo. Donec efficitur lectus eget congue accumsan. Donec consectetur purus quis accumsan posuere. Etiam congue sapien nec diam ullamcorper pellentesque. Duis faucibus tristique leo et vestibulum. Nam finibus fringilla libero in eleifend.',
    message_id: 1},
    {username: 'commentor 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac sapien non aliquet. Etiam eu metus eget lectus faucibus laoreet. Curabitur pulvinar, mi in elementum congue, nibh est aliquam lectus, ac feugiat leo purus eu eros. Nullam vel urna in mi tincidunt suscipit. Cras ultricies turpis eu efficitur pharetra. Vivamus tempor mollis augue, at viverra mauris luctus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis risus urna, condimentum ut purus ut, consequat dictum diam. Morbi ultrices massa non dictum convallis. Nunc a enim quis ante imperdiet consequat in nec ex. Duis bibendum vestibulum massa sit amet dapibus. Aenean dapibus mi non erat accumsan, vitae mattis tortor ultricies. In elementum pharetra justo, vel ultricies eros. Aliquam ultricies congue mi, eu rhoncus sapien ultricies eu.

    Vestibulum quis lobortis eros. Quisque ex ex, sagittis eu laoreet non, malesuada ac lectus. Nulla ullamcorper nibh sit amet eleifend lacinia. Donec vestibulum, neque a rutrum volutpat, orci lacus rhoncus augue, sit amet commodo justo leo et elit. Proin dui enim, volutpat vel nisl non, maximus sollicitudin dolor. Sed ut mattis nulla. Nunc gravida orci eget condimentum rutrum. Fusce vestibulum purus dictum pellentesque tincidunt. Integer quam nisl, rhoncus ut tortor nec, faucibus porta urna. Phasellus et aliquam est. Suspendisse elementum finibus augue, quis laoreet neque cursus non. Nunc eu sapien lorem. Phasellus pulvinar elit non fermentum dapibus.
    
    In est nisl, interdum eu tellus at, imperdiet accumsan metus. Duis at cursus ipsum, a gravida velit. Fusce mi lectus, cursus ut nisi ac, semper dictum sapien. Duis dapibus nec felis at dapibus. Fusce sit amet iaculis felis. Vivamus nunc lorem, aliquam ac velit at, pellentesque dapibus tortor. Fusce imperdiet magna lectus, ut tempor orci blandit id.
    
    Integer sed posuere libero. Ut lacus purus, ornare vel urna et, vestibulum porta neque. Phasellus vulputate magna ut luctus pretium. Donec vel justo sem. Nulla orci turpis, ultricies vitae eleifend quis, dictum eu ex. Vestibulum sit amet nulla eros. Fusce at diam vulputate, posuere purus at, vulputate nunc. Nunc volutpat in felis vitae ullamcorper. Nullam et tortor odio. Curabitur eget massa aliquam, dignissim velit id, feugiat risus. Donec vehicula risus et gravida tincidunt. Aenean nec ultricies ligula. Integer ultrices varius lectus, in vulputate nulla auctor vel. Pellentesque venenatis nulla ut elit sodales aliquet.',
    message_id: 2},
    {username: 'commentor 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac sapien non aliquet. Etiam eu metus eget lectus faucibus laoreet. Curabitur pulvinar, mi in elementum congue, nibh est aliquam lectus, ac feugiat leo purus eu eros. Nullam vel urna in mi tincidunt suscipit. Cras ultricies turpis eu efficitur pharetra. Vivamus tempor mollis augue, at viverra mauris luctus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis risus urna, condimentum ut purus ut, consequat dictum diam. Morbi ultrices massa non dictum convallis. Nunc a enim quis ante imperdiet consequat in nec ex. Duis bibendum vestibulum massa sit amet dapibus. Aenean dapibus mi non erat accumsan, vitae mattis tortor ultricies. In elementum pharetra justo, vel ultricies eros. Aliquam ultricies congue mi, eu rhoncus sapien ultricies eu.

    Vestibulum quis lobortis eros. Quisque ex ex, sagittis eu laoreet non, malesuada ac lectus. Nulla ullamcorper nibh sit amet eleifend lacinia. Donec vestibulum, neque a rutrum volutpat, orci lacus rhoncus augue, sit amet commodo justo leo et elit. Proin dui enim, volutpat vel nisl non, maximus sollicitudin dolor. Sed ut mattis nulla. Nunc gravida orci eget condimentum rutrum. Fusce vestibulum purus dictum pellentesque tincidunt. Integer quam nisl, rhoncus ut tortor nec, faucibus porta urna. Phasellus et aliquam est. Suspendisse elementum finibus augue, quis laoreet neque cursus non. Nunc eu sapien lorem. Phasellus pulvinar elit non fermentum dapibus.
    
    In est nisl, interdum eu tellus at, imperdiet accumsan metus. Duis at cursus ipsum, a gravida velit. Fusce mi lectus, cursus ut nisi ac, semper dictum sapien. Duis dapibus nec felis at dapibus. Fusce sit amet iaculis felis. Vivamus nunc lorem, aliquam ac velit at, pellentesque dapibus tortor. Fusce imperdiet magna lectus, ut tempor orci blandit id.
    
    Integer sed posuere libero. Ut lacus purus, ornare vel urna et, vestibulum porta neque. Phasellus vulputate magna ut luctus pretium. Donec vel justo sem. Nulla orci turpis, ultricies vitae eleifend quis, dictum eu ex. Vestibulum sit amet nulla eros. Fusce at diam vulputate, posuere purus at, vulputate nunc. Nunc volutpat in felis vitae ullamcorper. Nullam et tortor odio. Curabitur eget massa aliquam, dignissim velit id, feugiat risus. Donec vehicula risus et gravida tincidunt. Aenean nec ultricies ligula. Integer ultrices varius lectus, in vulputate nulla auctor vel. Pellentesque venenatis nulla ut elit sodales aliquet.',
    message_id: 1},
    {username: 'commentor 4',
    content: 'reply 4',
    message_id: 2},
    {username: 'commentor 1',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    message_id: 1},
    {username: 'commentor 2',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
    message_id: 2},
     ])