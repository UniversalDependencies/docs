---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_llct-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_llct-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_llct-dep-advmod-tmod.html">advmod:tmod</a></tt>.

631 nodes (0%) are attached to their parents as `advmod:neg`.

610 instances of `advmod:neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45483359746434.

The following 7 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (614; 97% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (8; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	ita	ita	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	2	advmod	_	_
2	melioretur	melioro	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
3	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	5	cc	_	_
4	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	5	advmod:neg	_	_
5	pegioretur	peioro	VERB	v|v|3|s|p|s|p|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
6	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	nam	nam	PART	c|c|-|-|-|-|-|-|-|-	_	3	discourse	_	_
2	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	3	advmod:neg	_	_
3	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
5	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	6	det	_	_
6	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	3	obl	_	_
7	usumfructuandi	usufructuo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	6	acl	_	SpaceAfter=No|TraditionalMood=Gerundium
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	10	mark	_	_
10	[verb]	_	VERB	Punc	_	3	advcl	_	_
11	ille	ille	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	13	nmod	_	_
12	alia	alius	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Con	13	det	_	_
13	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:neg	color:blue
1	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	3	advmod:neg	_	_
2	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	veritas	ueritas	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	hoc	hic	DET	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
5	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	6	obj	_	_
6	dicis	dico	VERB	v|v|2|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


