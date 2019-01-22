---
layout: base
title:  'Typos and Other Errors in Underlying Text'
permalink: u/overview/typos.html
udver: '2'
---

(See also issues [#330](https://github.com/UniversalDependencies/docs/issues/330), [#513](https://github.com/UniversalDependencies/docs/issues/513), and [#544](https://github.com/UniversalDependencies/docs/issues/544).)

# Typos and Other Errors in Underlying Text

Sometimes the text underlying a UD treebank does not conform to canonical spelling or other grammatical rules of the language. In most situations it is desirable to preserve the error because taggers and parsers that learn their models from the data should learn how to deal with noisy input too. On the other hand, it is also desirable to mark such places as errors and to show the correct spelling, so that an application can hide bad sentences or present their correct version when necessary.

The recommendations on this page are designed with sporadic errors in mind. Technically they could be also applied to learner corpora, which are full of errors; however, learner corpora usually require more thinking, and the main question is: Do we want to guess what the author would have written if they knew the language better, or do we want to approximate “the grammar in their head,” which is probably a mixture of the intended language and a language they know better?

## Misspelled Word

The easiest type of error is a simple typo in a single word, especially if the result is a non-word. (If the result is another word of the language, e.g. if one writes _too_ instead of _two_ in English, then we must decide that the author really wanted to say something else, and it may not be always obvious.)

The FORM field and the `text` attribute at the beginning of the sentence should always contain the form that really occurred in the original text. On the other hand, LEMMA should use normalized spelling; thus if the text says _kats_ instead of _cats_, the lemma will be _cat_, not _kat_. Now the morphological features should include the feature [Typo]()`=Yes` that marks the typo. This is important: it ensures that there is a unique mapping from lemma + part-of-speech tag + morphological features to the correct word form. Without `Typo=Yes`, one could infer from the corpus that the correct plural form of the English noun _cat_ is _kats_. (The mapping is actually not unique for wrong forms, as all possible misspellings are still marked by the same `Typo=Yes` feature.)

Finally, neither the lemma nor the morphological features tell the user what the correct spelling at this position would be. We want to list the correct form as well. This is not a morphological feature, so we must put it in the MISC column instead: `CorrectForm=cats`. Here is a full example:

<pre>
# text = I have two kats.
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	have	have	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	two	two	NUM	_	NumType=Card	4	nummod	_	_
4	kats	cat	NOUN	_	Number=Plur|Typo=Yes	2	obj	_	CorrectForm=cats|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

</pre>
