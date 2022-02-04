---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The parataxis relation (from Greek for “place side by side”) is a relation between a word (often the main predicate of a sentence) and other elements, such as a sentential parenthetical or a clause after a “:” or a “;”, placed side by side without any explicit coordination, subordination, or argument relation with the head word. 
In Italian it is typically used with direct dialogs, introduced by declarative verbs. For other uses see the universal page of the same tag.

### Treatment of reported speech
~~~ sdparse
" Ma no , non è così - replica Ante - .
cop(così, è)
parataxis(così, replica)
~~~

### Interjected clauses
~~~ sdparse
come hanno fatto sempre per tre anni ( mi dicono )
parataxis(fatto, dicono)
~~~

### Side-by-side sentences ("run-on sentences")
~~~ sdparse
e adesso non si può fermare , questi sono contratti vecchi.
parataxis(fermare, contratti)
~~~

The following specializations are used in the PoSTWITA, a tweet corpus, since for that text genre it was deeemed necessary 
to resort to an extensive use of parataxis, and of different flavours for different uses, in order to preserve the unit of tweets:

* [parataxis:appos](parataxis-appos) is used for appositive sentences 
* [parataxis:discourse](parataxis-discourse) is used for semantically-void sentences used as discourse markers 
* [parataxis:hashtag](parataxis-hashtag) is used for hashtags that are not syntactically integrated into the sentence 
* [parataxis:insert](parataxis-insert) is used for parenthetical clauses that cannot be considered independent from the governing predicate 
* [parataxis:nsubj](parataxis-nsubj) is used for paratactic sentences with an implicit nsubj role with respect to the governing predicate 
* [parataxis:obj](parataxis-obj) is used for paratactic sentences with an implicit obj role with respect to the governing predicate



<!-- Interlanguage links updated St lis 3 20:59:07 CET 2021 -->
