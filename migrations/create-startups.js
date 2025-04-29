'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('startups', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()')
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            tagline: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            city: {
                type: Sequelize.STRING
            },
            province: {
                type: Sequelize.STRING
            },
            founded_year: {
                type: Sequelize.INTEGER
            },
            industry: {
                type: Sequelize.STRING
            },
            stage: {
                type: Sequelize.STRING
            },
            website: {
                type: Sequelize.STRING
            },
            logo_url: {
                type: Sequelize.STRING
            },
            pitch_video: {
                type: Sequelize.STRING
            },
            founder_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'founders',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            userId: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            approved: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('startups');
    }
};
