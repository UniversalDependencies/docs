---
layout: base
title:  'Statistics of amod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `amod`

This relation is universal.

1014 nodes (2%) are attached to their parents as `amod`.

508 instances of `amod` (50%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32248520710059.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (937; 92% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (37; 4% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (16; 2% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	AlignBegin=26749|AlignEnd=26864
2	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	4	iobj	_	AlignBegin=26864|AlignEnd=26914|SpaceAfter=No
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	AlignBegin=26914|AlignEnd=26944
4	sorti	sortir	VERB	_	VerbForm=Part|Voice=Act	0	root	_	AlignBegin=26944|AlignEnd=27284|Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
5	un	un	DET	_	Definite=Ind|ExtPos=ADV|Gender=Masc|Number=Sing|PronType=Art	4	advmod	_	AlignBegin=27284|AlignEnd=27364|Idiom=Yes
6	petit	petit	ADJ	_	Gender=Masc	5	fixed	_	AlignBegin=27364|AlignEnd=27514|InIdiom=Yes|Number[ctxt]=Sing
7	peu	peu	NOUN	_	_	5	fixed	_	AlignBegin=27514|AlignEnd=27614|InIdiom=Yes
8	de	de	ADP	_	_	11	case	_	AlignBegin=27614|AlignEnd=27644
9	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	AlignBegin=27644|AlignEnd=27784|Gender[ctxt]=Masc
10	petit	petit	ADJ	_	Gender=Masc	11	amod	_	AlignBegin=27784|AlignEnd=27954|Number[ctxt]=Sing
11	cocon	cocon	NOUN	_	_	4	obl:arg	_	AlignBegin=27954|AlignEnd=28274|Gender[lex]=Masc|Number[ctxt]=Sing
12	de	de	ADP	_	_	14	case	_	AlignBegin=28274|AlignEnd=28354
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	AlignBegin=28274|AlignEnd=28354
14	septième	septième	NOUN	_	_	11	nmod	_	AlignBegin=28354|AlignEnd=28804|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	AlignBegin=28804|AlignEnd=28804

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	donc	donc	ADV	_	_	7	advmod	_	AlignBegin=75287|AlignEnd=75557|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=75557|AlignEnd=75557
3	euh	euh	INTJ	_	_	1	discourse	_	AlignBegin=75557|AlignEnd=75850|SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	AlignBegin=75850|AlignEnd=76094
5	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=76094|AlignEnd=76179|SpaceAfter=No
6	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux:tense	_	AlignBegin=76179|AlignEnd=76229
7	connu	connaître	VERB	_	VerbForm=Part|Voice=Act	0	root	_	AlignBegin=76229|AlignEnd=76479|Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
8	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	AlignBegin=76479|AlignEnd=76509|SpaceAfter=No
9	Algérie	Algérie	PROPN	_	_	7	obj	_	AlignBegin=76509|AlignEnd=76829|Gender[lex]=Unknown
10	heureuse	heureux	ADJ	_	Gender=Fem	9	amod	_	AlignBegin=76829|AlignEnd=77279|Number[ctxt]=Sing|SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	AlignBegin=77279|AlignEnd=77279

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	et	et	CCONJ	_	_	3	cc	_	AlignBegin=155269|AlignEnd=155364
2	tout	tout	ADJ	_	Gender=Masc	3	amod	_	AlignBegin=155364|AlignEnd=155514|Number[ctxt]=Sing
3	cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	AlignBegin=155514|AlignEnd=155824
4	grâce	grâce	ADV	_	_	3	advmod	_	AlignBegin=155824|AlignEnd=156384
5	à	à	ADP	_	_	7	case	_	AlignBegin=156528|AlignEnd=156688
6	notre	son	DET	_	Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	AlignBegin=156757|AlignEnd=157074
7	boule	boule	NOUN	_	_	4	obl:arg	_	AlignBegin=157074|AlignEnd=157334|Gender[lex]=Fem|Number[ctxt]=Sing
8	de	de	ADP	_	_	9	case	_	AlignBegin=157334|AlignEnd=157404
9	lavage	lavage	NOUN	_	_	7	nmod	_	AlignBegin=157404|AlignEnd=157834|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	AlignBegin=157834|AlignEnd=0
11	Maître	Maître	PROPN	_	Gender=Masc|Number=Sing	3	vocative	_	AlignBegin=157834|AlignEnd=158054|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	AlignBegin=0|AlignEnd=0

~~~


