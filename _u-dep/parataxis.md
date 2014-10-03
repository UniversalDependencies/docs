---
layout: entry
title: 'parataxis'
shortdef: 'parataxis'
---

The parataxis relation (from Greek for "place side by side") is a
relation between the main verb of a clause and other sentential
elements, such as a sentential parenthetical, a clause after a “:” or
a “;”, or two sentences placed side by side without any explicit
coordination or subordination.

~~~ sdparse
Let 's face it we 're annoyed
parataxis(Let, annoyed)
~~~

~~~ sdparse
The guy , John said , left early in the morning
parataxis(left, said)
~~~

### Treatment of reported speech

For the reported speech example above, there are paraphrases that convey essentially the same meaning but
with a different syntactic structure. When the reported speech is embedded in a subordinate clause (with or 
without an overt complementizer _that_), the subordinate clause is a [ccomp]() of the speech verb. When the
reported speech follows the speech verb and is separated by a colon, the reported speech forms a main clause
that attaches to the preceding main clause with a [parataxis]() relation, hence with the speech verb as its head.
However, when the speech verb occurs as a medial or final parenthetical, the relation is reversed and the speech
verb is treated as a [parataxis]() of the reported speech. 
This analysis is not uncontroversial but follows many authorities, such as Huddleston and Pullum (2002), _The Cambridge Grammar of the English Language_ (see chapter 11, section 9). 

~~~ sdparse
John said that the guy left early in the morning .
ccomp(said, left)
~~~

~~~ sdparse
John said the guy left early in the morning .
ccomp(said, left)
~~~

~~~ sdparse
John said : “ The guy left early in the morning . ”
parataxis(said, left)
~~~

~~~ sdparse
“ The guy left early in the morning ” , John said .
parataxis(left, said)
~~~

~~~ sdparse
The guy left early in the morning , John said .
parataxis(left, said)
~~~

~~~ sdparse
The guy , he said , left early in the morning .
parataxis(left, said)
~~~

An argument for this analysis is that in the cases analyzed as embedding, the entire clause can be further embedded (_I was taken aback when John said the guy left early in the morning._), while this is not possible with medial or final placement of the speech verb (_*I was taken aback when the guy left early this morning, John said._).
