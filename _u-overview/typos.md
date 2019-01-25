---
layout: base
title:  'Typos and Other Errors in Underlying Text'
permalink: u/overview/typos.html
udver: '2'
---

<!--
(See also issues [#330](https://github.com/UniversalDependencies/docs/issues/330), [#513](https://github.com/UniversalDependencies/docs/issues/513), and [#544](https://github.com/UniversalDependencies/docs/issues/544).)
-->

# Typos and Other Errors in Underlying Text

Sometimes the text underlying a UD treebank does not conform to canonical spelling or other grammatical rules of the language. In most situations it is desirable to preserve the error because taggers and parsers that learn their models from the data should learn how to deal with noisy input too. On the other hand, it is also desirable to mark such places as errors and to show the correct spelling, so that an application can hide bad sentences or present their correct version when necessary.

The recommendations on this page are designed with sporadic errors in mind. Technically they could be also applied to learner corpora, which are full of errors; however, learner corpora usually require more thinking, and the main question is: Do we want to guess what the author would have written if they knew the language better, or do we want to approximate “the grammar in their head,” which is probably a mixture of the intended language and a language they know better?

Mechanisms similar to typo handling could also be used to annotate historical corpora with historical spelling; see [below](#historical-spelling) for more details.

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

## Wrongly Split Word

If the word is erroneously written with one or more spaces, we have several incorrect tokens. We do not join them into one token with a space, although Universal Dependencies since version 2 allow words with spaces. This option is reserved for very specific situations, usually quite marginal in the language (with the exception of Vietnamese), but _predictable._ Not for arbitrary errors. Instead, UD defines the [goeswith]() relation to connect the parts of the word. The first part is always the head, the other parts are attached to it via `goeswith`.

The head should also bear the part-of-speech tag and morphological annotation of the entire word. It is not necessary to add the `Typo` feature and `CorrectForm` in MISC, unless there is a “normal” typo too, i.e. if simple concatenation of the parts does not yield the correct form. Example:

<pre>
# text = This spel ling is wrong.
1	This	this	DET	_	Number=Sing|PronType=Dem	2	det	_	_
2	spel	spelling	NOUN	_	Number=Sing	5	nsubj	_	_
3	ling	_	X	_	_	2	goeswith	_	_
4	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	wrong	wrong	ADJ	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

</pre>

## Wrongly Merged Words

UD has two mechanisms capable of capturing that two words are not separated by whitespace: the `SpaceAfter=No` attribute in MISC, and multi-word tokens. The former is considered low-level and it is normally used between a word and a punctuation node. The latter is intended for situations where two real words are merged into one, but it is assumed that these cases adhere to regular rules of the grammar, i.e., they are not arbitrary errors. Also, the format of multi-word token annotation is technically more complex because it allows for non-concatenative fusions. For the annotation of poorly edited text, the low-level `SpaceAfter` attribute seems quite suitable.

As with `Typo=Yes` and `CorrectForm=X`, it is desirable to indicate that the space is missing by error. Therefore, `SpaceAfter=No` should be accompanied by `CorrectSpaceAfter=Yes`.

Note that a similar mechanism can be used also to mark excess spaces around punctuation (using `CorrectSpaceAfter=No`). Punctuation should not be attached to another node via `goeswith` because they do not together constitute a word. Example:

<pre>
# text = This spellingis wrong .
1	This	this	DET	_	Number=Sing|PronType=Dem	2	det	_	_
2	spelling	spelling	NOUN	_	Number=Sing	4	nsubj	_	SpaceAfter=No|CorrectSpaceAfter=Yes
3	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	wrong	wrong	ADJ	_	_	0	root	_	CorrectSpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

</pre>

## A Combination of the Above

Here is a more complex example that combines several error types in one sentence:

<pre>
# text = This spel lingi$ wrong .
1	This	this	DET	_	Number=Sing|PronType=Dem	2	det	_	_
2	spel	spelling	NOUN	_	Number=Sing	5	nsubj	_	_
3	ling	_	X	_	_	2	goeswith	_	SpaceAfter=No|CorrectSpaceAfter=Yes
4	i$	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	5	cop	_	CorrectForm=is
5	wrong	wrong	ADJ	_	_	0	root	_	CorrectSpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

</pre>

## Missing Word

If one or more words are missing from the text, we treat it as [ellipsis](specific-syntax.html#ellipsis). That is, we select a constituent from the remainder of the incomplete subtree, promote it to the head of the subtree and attach the other surviving dependents to it. If an argument of a missing verb is promoted, the other arguments and adjuncts are attached to it via the [orphan]() relation, otherwise the relation type is used that would go out of the head if the missing material were present.

Note that sometimes words are missing really by error and not due to ellipsis, albeit we propose to use an ellipsis-like annotation. For instance, errors in sentence segmentation may cause the sentence to end prematurely, after a period that was not intended to terminate the sentence.

## Extra Word

If the text contains by error a word that should not be there, it can be treated similarly to speech disfluences, that is, attached to the following constituent via the [reparandum]() relation. A relatively common instance in written language is that a word is typed twice in a row.

## Wrong Morphology or Syntax

For example, the grammar requires dative but the actual form is nominative. Or a singular occurs instead of plural _(the cars is produced in Detroit)._ Such errors could be treated as simple typos but intuitively they are not in the same category (although they could co-occur with a typo, as in _the cars iss produced…_) It is not always obvious what is the correct form. We could either correct _cars_ to _car_, or _is_ to _are_ (but not both). Similarly, it may be clear that the actual word form is the nominative case and that it is wrong, but several other morphological cases may be plausible in the given context.

Sometimes it will not be obvious whether such errors should be classified as errors. In some languages it may be dialectal or other variety. (This actually applies to certain typos too: _color_ is correct in American English but in Britain it should be _colour_.)

Suggestion: Keep the word as it was in the source text. Add morphological features that correspond to the actual form, not to the hypothetical correct form: English _is_ is `Number=Sing`, and _cars_ is `Number=Plur`. (Note that some cases will be hard to decide. Czech _auto_ “car” is singular nominative or accusative. If the context requires the dative _(autu),_ we only know that the actual form is wrong. But we don’t know whether it is `Case=Nom` or `Case=Acc`, thus we may have to annotate `Case=Acc,Nom`. If there were the correct form _autu,_ which besides the dative could also mean locative, we will disambiguate it by the context and annotate `Case=Dat`, not `Case=Dat,Loc`.)

In the MISC column, we should indicate the correct form as we did with simple typos: `CorrectForm=autu`. We also add in the MISC column those features from the FEAT column that would differ for the correct form, and prefix them with “Correct”, e.g. `CorrectCase=Dat`. We will not add the `Typo=Yes` feature in FEAT because the word form in FORM reflects the values of the morphological features in FEAT.

As for the syntactic annotation, there does not seem to be a simple and easy-to-follow rule. Each sentence will have to be decided separately, seeking a compromise between the actual surface form and the assumed intended reading. For example, consider the Czech preposition _k_ “to” which requires noun phrases in the dative. If the text contains (wrong) _k auto_ instead of (correct) _k autu,_ using the relation `case(auto, k)` is probably the only thing we can do, regardless that the nominative _auto_ is ungrammatical with the preposition.

<pre>
# text = The cars is produced in Detroit.
1	The	the	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	cars	car	NOUN	_	Number=Plur	4	nsubj:pass	_	_
3	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	CorrectForm=are|CorrectNumber=Plur
4	produced	produce	VERB	_	Tense=Past|VerbForm=Part	0	root	_	_
5	in	in	ADP	_	_	6	case	_	_
6	Detroit	Detroit	PROPN	_	Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

</pre>

## Historical Spelling

Similar mechanisms could also be used to mark historical spelling in older texts. For instance, German _sein_ “to be” used to be spelled _seyn_. It is not a typo because this form was correct in the time the text was produced. Thus in the FEATS column, we may use [Style]()`=Arch` to mark that this is an archaic form. In the MISC column, we can add `ModernForm=sein` (an analogy to `CorrectForm=sein`, which we would use if we wanted to mark it as a typo).