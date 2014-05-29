# Mean Tags

Mean Tags enables adding tags to your app


## Basic Usage

Add to your schema:

	tags: [{
        type: Schema.ObjectId,
        ref: 'Tag'
    }]

populating the field:

	.populate('tags', 'title')

View:

	<div mean-tags data-ng-model="(yourObject).tags"></div>
