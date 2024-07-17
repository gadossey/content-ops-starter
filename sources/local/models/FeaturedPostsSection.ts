import { Model } from '@stackbit/types';

export const FeaturedPostsSection: Model = {
    type: 'object',
    name: 'FeaturedPostsSection',
    label: 'Featured Posts',
    labelField: 'title.text',
    fields: [
        {
            type: 'model',
            name: 'title',
            label: 'Title',
            required: false,
            hidden: false,
            localized: false,
            models: ['TitleBlock']
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: false,
            default: 'Latest Innovations and Updates',
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'posts',
            label: 'Posts',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'reference',
                models: ['PostLayout']
            }
        },
        {
            type: 'boolean',
            name: 'showThumbnail',
            label: 'Show post thumbnail',
            required: false,
            default: true,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'showExcerpt',
            label: 'Show post excerpt',
            required: false,
            default: true,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'showDate',
            label: 'Show post date',
            required: false,
            default: true,
            hidden: false,
            localized: false
        },
        {
            type: 'boolean',
            name: 'showAuthor',
            label: 'Show post author',
            required: false,
            default: true,
            hidden: false,
            localized: false
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            required: false,
            hidden: false,
            localized: false,
            items: {
                type: 'model',
                models: ['Button', 'Link']
            }
        },
        {
            type: 'enum',
            name: 'variant',
            label: 'Variant',
            required: true,
            options: [
                {
                    label: 'Three column grid',
                    value: 'three-col-grid'
                },
                {
                    label: 'Big list',
                    value: 'big-list'
                }
            ],
            default: 'three-col-grid',
            group: 'styles',
            controlType: 'button-group'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            required: true,
            options: [
                {
                    label: 'Light background / Dark text',
                    value: 'bg-light-fg-dark'
                },
                {
                    label: 'Neutral background / Dark text',
                    value: 'bg-neutral-fg-dark'
                },
                {
                    label: 'Neutral background / Light text',
                    value: 'bg-neutral-fg-light'
                }
            ],
            default: 'bg-light-fg-dark',
            group: 'styles',
            controlType: 'button-group'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            label: 'Background image',
            required: false,
            hidden: false,
            localized: false,
            models: ['BackgroundImage'],
            group: 'styles'
        },
        {
            type: 'enum',
            name: 'hoverEffect',
            label: 'Hover effect',
            required: true,
            options: [
                {
                    label: 'Thin underline',
                    value: 'thin-underline'
                },
                {
                    label: 'Thick underline',
                    value: 'thick-underline'
                },
                {
                    label: 'Shadow',
                    value: 'shadow'
                },
                {
                    label: 'Move up',
                    value: 'move-up'
                },
                {
                    label: 'Shadow + move-up',
                    value: 'shadow-plus-move-up'
                }
            ],
            group: 'styles',
            controlType: 'dropdown'
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            description: 'The styles field is controlled by Netlify Create editor',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                self: {
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center']
                },
                subtitle: {
                    fontStyle: '*',
                    fontWeight: ['400', '500', '700'],
                    textDecoration: '*',
                    textAlign: '*'
                }
            }
        }
    ],
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ]
};
