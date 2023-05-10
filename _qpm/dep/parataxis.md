---
layout: relation
title:  'parataxis'
shortdef : 'parataxis'
udver: '2'
---



The [parataxis]() dependency relation (from Greek for "place side by side") is a
relation between a word (often the main predicate of a sentence) and other
elements, such as a sentential parenthetical or a clause after a “:” or
a “;”, placed side by side without any explicit
coordination, subordination, or argument relation with the head word. Parataxis is a discourse-like equivalent of coordination, and so usually obeys an iconic ordering. Hence it is normal for the first part of a sentence to be the head and the second part to be the parataxis dependent, regardless of the headedness properties of the language.  But things do get more complicated, such as cases of parentheticals, which appear medially.

<!--
~~~ sdparse
Let 's face it we 're annoyed
parataxis(Let, annoyed)
~~~
-->

~~~ sdparse
“kúčeto”, káza afčáret, “na háfna níta annóš” 
lit: “dog-the”, said shepard-the, “not bark neither once”
"“the dog”  says the shepard,  “did not bark even once”"  
parataxis(kúčeto, afčáret)    
~~~

The parataxis relation is used for a pair of what could have been standalone sentences, 
but which are being treated together as a single sentence. This may happen because sentence
segmentation of the sentence was done primarily following the presence of sentence-final punctuation,
and these clauses are joined by punctuation such as a colon or comma, or not delimited by punctuation
at all. In a spoken corpus, it may happen because what is labeled as a sentence is more
commonly an utterance turn. Even if the treebanker is doing the sentence division, it may
happen because there seems to be a clear discourse relation linking two clauses. 
Sometimes there are more than two sentences joined in this way. In this case we make all the later sentences
dependents of the first one, to maximize similarity to the analysis used for conjunction.
This may take place because the sentence segmentation was done primarily according to the sentence-final punctuation; these sentences may be joined by punctuation such as a colon or a comma,  while they may not be delimited by punctuation at all. Also, there may be more than two sentences joined in this manner, where the last ones are depended on the first one. Moreover, when a speech verb interrupts a reported speech content, the interruption is treated as a parenthetical parataxis:



In the Pomak treebank, [parataxis]()  has also been used to mark the narrating person or the speaking persons of a dialogue twho are divided from their reported direct with a colon (:), whether their speech follows either enclosed in quotation marks (“ ”) or not. In this case, [parataxis]() links  the named entity  with the root of the sentence: 

~~~ sdparse
Jurké : Ne préče mí játse da sme nannó ! 
Yurke: It does not matter to be together!
parataxis(préče, Jurké)
~~~


<!-- Interlanguage links updated Út 9. května 2023, 20:04:31 CEST -->
