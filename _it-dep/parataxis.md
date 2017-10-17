---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
---

The parataxis relation (from Greek for “place side by side”) is a relation between a word (often the main predicate of a sentence) and other elements, such as a sentential parenthetical or a clause after a “*:*” or a “*;*”, placed side by side without any explicit coordination, subordination, or argument relation with the head word. 
In Italian it is used with direct dialogs, introduced by declarative verbs, or lists.

~~~ sdparse
" Ma no , non è così - replica Ante - .
cop(così, è)
parataxis(così, replica)
~~~
~~~ sdparse
Romana elettricità , azioni 1400 ; Terni , azioni 300 ; Montecatini , azioni 2000 ;
parataxis(Romana, Terni)
parataxis(Romana, Montecatini)
~~~
