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
                title: 'Porticus'
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
                        iconCls: 'home',
                        iconMask: true,
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: 'CameraButton',
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
        ]
    },

    initialize: function() {

        this.callParent();

        // Enable the Tap event on the profile picture in the toolbar, so we can show a logout button
        var meta = Ext.getCmp('SettingsButton');

        if (meta) {
            meta.element.on('tap', function(e) {
                meta.fireEvent('tap', meta, e);
            });
        }

    }

});