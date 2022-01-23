from setuptools import setup


setup(
    name='osiris',
    version='',
    packages=['osiris', 'postmortems', 'postmortems.migrations'],
    url='',
    license='',
    author='omer',
    author_email='',
    description='',
    install_requires=[
        'django',
        'django-environ',
        'django-filter',
        'mysqlclient',
        'djangorestframework',
        'markdown',
        'channels',
        'channels-redis',
    ]
)
