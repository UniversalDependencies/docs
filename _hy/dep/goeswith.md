---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

This relation links two or more parts of a word that are separated in text that is not well edited.
These parts should be written together as one word according to the ortographic rules of Armenian.
The head is in some sense the _main_ part, the other parts are attached to it with the `goeswith` relation.
Note that only the last part may be annotated with `SpaceAfter=No`.

~~~ sdparse
նա ի զուր էր այդքան անհանգստանում
goeswith(զուր, ի)
~~~

~~~ sdparse
կարգ ու կանոն հաստատել
goeswith(կանոն, ու)
goeswith(կանոն, կարգ)
~~~

Note that we also use this relation to link the inflectional bound morphemes to the _main_ part of the word (usually phrases or sentences used as names) that are separated due to tokenization.

~~~ sdparse
« Երկիր/NOUN Նաիրի/NOUN » - ից/X/Case=Abl \n “ Yerkir Nairi ” - from
punct(Նաիրի, «)
punct(Նաիրի, »)
punct(ից, -)
goeswith(Նաիրի, ից)
~~~

For more details see the [tokenization page](http://universaldependencies.org/hy/overview/tokenization.html).
