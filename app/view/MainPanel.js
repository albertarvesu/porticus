/*
 * File: app/view/MainPanel.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Porticus.view.MainPanel', {
    extend: 'Ext.Panel',

    config: {
        id: 'MainPanel',
        ui: '',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                id: 'MainTitlebar',
                title: '',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'image',
                        docked: 'right',
                        height: 50,
                        id: 'FBAvatar',
                        padding: '',
                        ui: '',
                        width: 50,
                        src: 'resources/images/default_profile_picture.jpg',
                        align: 'right'
                    },
                    {
                        xtype: 'label',
                        cls: [
                            'fbUsername'
                        ],
                        html: 'Albert Arvesu',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'list',
                id: 'WallItemList',
                layout: {
                    type: 'card'
                },
                itemCls: 'flickr-item',
                itemTpl: [
                    '<div class="image">',
                    '<img src="http://farm{farm}.staticflickr.com/{server}/{id}_{secret}_q.jpg">',
                    '</div>',
                    '<div class="title">',
                    '<span>{title}</span>',
                    '</div>'
                ],
                store: 'FlickrStore',
                plugins: [
                    {
                        type: 'listpaging'
                    },
                    {
                        type: 'pullrefresh'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                id: 'MainToolbar',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        disabled: true,
                        id: 'HomeButton',
                        itemId: 'mybutton6',
                        iconCls: 'home',
                        iconMask: true,
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: 'CameraButton',
                        itemId: 'mybutton4',
                        iconCls: 'bookmarks',
                        iconMask: true,
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: 'SettingsButton',
                        iconCls: 'settings',
                        iconMask: true,
                        text: ''
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onHomeButtonTap',
                event: 'tap',
                delegate: '#HomeButton'
            },
            {
                fn: 'onCameraButtonTap',
                event: 'tap',
                delegate: '#CameraButton'
            }
        ]
    },

    onHomeButtonTap: function(button, e, options) {

        //disable the home button,  enable the camera button
        button.disable();
        Ext.getCmp('CameraButton').enable();

        //show the wall items
        Ext.getCmp('WallItemList').show();
    },

    onCameraButtonTap: function(button, e, options) {

        //disable the camera button,  enable the home button
        button.disable();
        Ext.getCmp('HomeButton').enable();


        //hide the wall items
        Ext.getCmp('WallItemList').hide();
    },

    initialize: function() {

        this.callParent();

        this.setUserAvatar();

        // Enable the Tap event on the profile picture in the toolbar, so we can show a logout button
        var meta = Ext.getCmp('SettingsButton');

        if (meta) {
            meta.element.on('tap', function(e) {
                meta.fireEvent('tap', meta, e);
            });
        }

    },

    setUserAvatar: function() {

        this
        .down("#FBAvatar")
        .setSrc("http://graph.facebook.com/" + Porticus.fbUser.username + "/picture");
    }

});