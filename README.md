### Verb Conjugator

A fast simple verb conjugator.

##### Dependencies

- npm 3.10
- node 6.9
- docker 1.12

##### Install

```sh
sudo npm install
```

##### Watch files
```
$(npm bin)/gulp
```

##### Start server on port 80

```sh
docker run -it -p 80:80 --name=conjugateverb -v $(pwd):/usr/share/nginx/html nginx:1.11.8
```

Current languages implemented:

- French