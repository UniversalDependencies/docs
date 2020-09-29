---
layout: relation
title:  'discourse'
shortdef : 'discourse element'
---

*Discourse elements* are interjections, exclamations or emoticons. They are attached to the main verb or predicative of the
sentence with the `discourse` dependency type. In Finnish, these do not include other discourse markers.

<!-- fname:intj1.pdf -->
~~~ sdparse
Hei , tule auttamaan ! \n Hey , come to_help !
discourse(tule-3, Hei-1)
punct(Hei-1, ,-2)
xcomp(tule-3, auttamaan-4)
punct(tule-3, !-5)
~~~

<!-- fname:intj2.pdf -->
~~~ sdparse
Hmm ... Mitähän tuohon sanoisi ? \n Umm ... What to_that to_say ?
discourse(sanoisi-5, Hmm-1)
punct(Hmm-1, ...-2)
dobj(sanoisi-5, Mitähän-3)
nmod(sanoisi-5, tuohon-4)
punct(sanoisi-5, ?-6)
~~~

~~~ sdparse 
Iguazu on Argentiinassa :]  \n Iguazu is in Argentina :]
discourse(on-2, :]-4)
~~~

## Diffs

### Turku Dependency Treebank

These do not include other discourse markers than interjections or exclamations.
<!-- Interlanguage links updated Út zář 29 18:41:19 CEST 2020 -->
