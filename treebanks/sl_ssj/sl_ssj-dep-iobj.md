---
layout: base
title:  'Statistics of iobj in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `iobj`

This relation is universal.

1692 nodes (1%) are attached to their parents as `iobj`.

1169 instances of `iobj` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58156028368794.

The following 13 pairs of parts of speech are connected with `iobj`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (919; 54% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (532; 31% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (102; 6% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (41; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (34; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (28; 2% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	Za	za	ADP	Sa	Case=Acc	3	case	_	NER=O
2	to	ta	DET	Pd-fsa	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	NER=O
3	pomoč	pomoč	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	NER=O
4	smo	biti	AUX	Va-r1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	NER=O
5	jim	on	PRON	Pp3mpd--y	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	8	iobj	_	NER=O
6	seveda	seveda	PART	Q	_	8	advmod	_	NER=O
7	tudi	tudi	PART	Q	_	8	advmod	_	NER=O
8	plačali	plačati	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	NER=O|SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	_	NER=O

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Poročajte	poročati	VERB	Vmpm2p	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	NER=O
2	upravitelju	upravitelj	NOUN	Ncmsd	Case=Dat|Gender=Masc|Number=Sing	1	iobj	_	NER=O
3	bazena	bazen	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	NER=O
4	o	o	ADP	Sl	Case=Loc	6	case	_	NER=O
5	morebitnih	morebiten	ADJ	Agpfpl	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	NER=O
6	nevšečnostih	nevšečnost	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	1	obl	_	NER=O|SpaceAfter=No
7	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Kaj	kaj	PRON	Pq-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	2	obj	_	NER=O
2	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	NER=O
3	Ircem	Irec	PROPN	Npmpd	Case=Dat|Gender=Masc|Number=Plur	2	iobj	_	NER=B-per
4	državljanstvo	državljanstvo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	NER=O
5	v	v	ADP	Sl	Case=Loc	6	case	_	NER=O
6	državi	država	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	NER=O
7	NSK	NSK	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	NER=B-org|SpaceAfter=No
8	,	,	PUNCT	Z	_	12	punct	_	NER=O
9	in	in	CCONJ	Cc	_	12	cc	_	NER=O
10	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	fixed	_	NER=O
11	prav	prav	PART	Q	_	12	advmod	_	NER=O
12	zdaj	zdaj	ADV	Rgp	Degree=Pos	2	conj	_	NER=O|SpaceAfter=No
13	?	?	PUNCT	Z	_	2	punct	_	NER=O

~~~


