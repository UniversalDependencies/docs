---
layout: relation
title:  'discourse'
shortdef : 'discourse element'
udver: '2'
---

*Discourse elements* are interjections, exclamations or emoticons. They are attached to the main verb or predicative of the
sentence with the `discourse` dependency type.

~~~ sdparse
Жоқ , Айгүлдің күшігі жоқ . \n No , Aygül's dog not-existing-is .
discourse(жоқ-5, Жоқ-1)
nsubj(жоқ-5, күшігі-4)
~~~

And another example:

~~~ sdparse
Жоқ , хат жазып берейін . \n No , letter writing let-me .
discourse(жазып-4, Жоқ-1)
~~~

The `discourse` label is also used for modal words, and the question word (ма):

~~~ sdparse
Ал Айгүлдің күшігі бар ма ? \n And Aygül's dog existing-is does-it ?
discourse(бар-4, ма-5)
nsubj(бар-4, күшігі-3)
~~~

<!-- TODO: more modals -->
<!-- Interlanguage links updated St lis 3 20:58:51 CET 2021 -->
