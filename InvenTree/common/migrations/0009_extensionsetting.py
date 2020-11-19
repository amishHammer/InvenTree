# Generated by Django 3.0.7 on 2020-10-27 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0008_remove_inventreesetting_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExtensionSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('extension', models.CharField(help_text='Name of the extension', max_length=100)),
                ('setting', models.CharField(help_text='Name of the setting', max_length=100)),
                ('value', models.CharField(help_text='Setting value', max_length=100)),
            ],
            options={
                'verbose_name': 'InvenTree Extension Setting',
                'verbose_name_plural': 'InvenTree Extension Settings',
            },
        ),
    ]