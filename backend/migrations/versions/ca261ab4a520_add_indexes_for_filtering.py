"""add_indexes_for_filtering

Revision ID: ca261ab4a520
Revises: f4b2c8d9a6e1
Create Date: 2026-03-01 21:03:55.262721

"""
from alembic import op


# revision identifiers, used by Alembic.
revision = 'ca261ab4a520'
down_revision = 'f4b2c8d9a6e1'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_index(op.f('ix_admin_users_is_active'), 'admin_users', ['is_active'], unique=False)
    op.create_index(op.f('ix_admin_users_role'), 'admin_users', ['role'], unique=False)
    op.create_index(op.f('ix_contact_inquiries_inquiry_type'), 'contact_inquiries', ['inquiry_type'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_contact_inquiries_inquiry_type'), table_name='contact_inquiries')
    op.drop_index(op.f('ix_admin_users_role'), table_name='admin_users')
    op.drop_index(op.f('ix_admin_users_is_active'), table_name='admin_users')
