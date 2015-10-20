'use strict';

app.factory('Post', function(DS) {
 
 	var Post = DS.defineResource({
 		basepath: '/api',
 		idAttribute: '_id',
 		name: 'posts',
 		relations: {
 			belongsTo: {
 				users : {
 					localField: 'user', 					
 					localKey: 'author'
 				}
 			}
 		},
 		methods: {
 			go: function() {
 				$state.go('post', {'postId' : this._id} );
 			}
 		}
 	})

    return Post;

}).run(function(Post) {});


// Post.find()
// 	.then(function(posts){
// 		return Posts.loadRelations(post, ['user'])
// 	})
// 	.then