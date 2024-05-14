---
layout: base
title:  'Statistics of advcl:abs in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advcl:abs`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_llct-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_llct-dep-advcl-pred.html">advcl:pred</a></tt>, <tt><a href="la_llct-dep-advcl-relcl.html">advcl:relcl</a></tt>.

2024 nodes (1%) are attached to their parents as `advcl:abs`.

1806 instances of `advcl:abs` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40711462450593.

The following 6 pairs of parts of speech are connected with `advcl:abs`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1685; 83% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (150; 7% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (108; 5% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (79; 4% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advcl:abs	color:blue
1	+	+	PUNCT	SYM	_	3	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Liutfridi	Liutfridus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	rogatus	rogo	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	Leo	Leo	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	3	punct	_	_
9	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	teste	testis	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	11	advcl:abs	_	_
11	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 15 advcl:abs	color:blue
1	rengnate	regno	VERB	t|t|-|s|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	TraditionalMood=Participium|TraditionalTense=Praesens
2	domno	domnus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	1	nsubj	_	_
3	nostro	noster	DET	a|a|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	2	det	_	_
4	Karlomanno	Carlomannus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	2	flat	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	piissimo	pius	ADJ	a|a|-|s|-|-|-|m|b|s	Case=Abl|Degree=Abs|Gender=Masc|Number=Sing	7	amod	_	_
7	rege	rex	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	9	punct	_	_
9	anno	annus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	1	obl	_	_
10	rengni	regnum	NOUN	n|n|-|s|-|-|-|n|g|-	Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	_
11	eius	is	PRON	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod	_	_
12	posquam	postquam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	19	mark	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	12	punct	_	_
14	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	15	nsubj	_	_
15	propitio	propitius	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	1	advcl:abs	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	19	punct	_	_
17	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
18	Italia	Italia	PROPN	Propn|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	19	obl	_	_
19	ingressus	ingredior	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
20	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
21	secundum	secundus	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|NumType=Ord	9	amod	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	23	punct	_	_
23	tertio	tertius	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|NumType=Ord	1	obl	_	_
24	nonas	nonae	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	23	nmod	_	_
25	septenbris	september	ADJ	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	24	amod	_	SpaceAfter=No
26	,	,	PUNCT	Punc	_	27	punct	_	_
27	indictione	indictio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	1	obl	_	_
28	tertia	tertius	ADJ	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|NumType=Ord	27	amod	_	_
29	decima	decimus	ADJ	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|NumType=Ord	28	flat	_	SpaceAfter=No
30	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advcl:abs	color:blue
1	+	+	PUNCT	SYM	_	10	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Iacobus	Iacobus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
4	clericus	clericus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
6	anc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	10	obl	_	_
8	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	consentiente	consentio	VERB	t|t|-|s|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	10	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
10	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


