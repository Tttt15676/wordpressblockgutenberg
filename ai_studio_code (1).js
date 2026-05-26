import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
    const { heading, content, linkUrl } = attributes;

    return (
        <div { ...useBlockProps.save() }>
            <RichText.Content tagName="h2" value={ heading } />
            { linkUrl ? (
                <a href={ linkUrl }>
                    <RichText.Content tagName="p" value={ content } />
                </a>
            ) : (
                <RichText.Content tagName="p" value={ content } />
            ) }
        </div>
    );
}