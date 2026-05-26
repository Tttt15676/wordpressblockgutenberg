import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const { heading, content, linkUrl } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Link Settings', 'my-custom-block' ) }>
                    <TextControl
                        label={ __( 'Link URL', 'my-custom-block' ) }
                        value={ linkUrl }
                        onChange={ ( value ) => setAttributes( { linkUrl: value } ) }
                    />
                </PanelBody>
            </InspectorControls>
            <div { ...useBlockProps() }>
                <RichText
                    tagName="h2"
                    value={ heading }
                    onChange={ ( value ) => setAttributes( { heading: value } ) }
                    placeholder={ __( 'Heading...', 'my-custom-block' ) }
                />
                <RichText
                    tagName="p"
                    value={ content }
                    onChange={ ( value ) => setAttributes( { content: value } ) }
                    placeholder={ __( 'Content...', 'my-custom-block' ) }
                />
            </div>
        </>
    );
}