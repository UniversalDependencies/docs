---
layout: base
title:  'discourse'
shortdef : 'discourse element'
---

## `{{ page.title }}`: {{ page.shortdef }}

*Discourse elements* are typically exclamations or wordlike entities. They are attached to the main verb or predicative of the sentence with the `discourse` dependency type.


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


