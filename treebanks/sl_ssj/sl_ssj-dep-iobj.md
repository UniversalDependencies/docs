---
layout: base
title:  'Statistics of iobj in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `iobj`

This relation is universal.

1059 nodes (0%) are attached to their parents as `iobj`.

769 instances of `iobj` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.59773371104816.

The following 9 pairs of parts of speech are connected with `iobj`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (594; 56% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (359; 34% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (60; 6% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (25; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (17; 2% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	Osnovni	osnoven	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	NER=O
2	nasvet	nasvet	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=O|SpaceAfter=No
3	:	:	PUNCT	Z	_	8	punct	_	NER=O
4	Nihče	nihče	PRON	Pz-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	8	nsubj	_	NER=O
5	drug	drug	ADJ	Mlpmsnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	amod	_	NER=O
6	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	8	iobj	_	NER=O
7	ne	ne	PART	Q	Polarity=Neg	8	advmod	_	NER=O
8	piše	pisati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	NER=O
9	urnika	urnik	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	NER=O|SpaceAfter=No
10	,	,	PUNCT	Z	_	12	punct	_	NER=O
11	samo	samo	PART	Q	_	12	advmod	_	NER=O
12	vi	ti	PRON	Pp2mpn	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	8	parataxis	_	NER=O
13	sami	sam	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	12	orphan	_	NER=O|SpaceAfter=No
14	.	.	PUNCT	Z	_	2	punct	_	NER=O

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Posebno	poseben	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	NER=O
2	skrb	skrb	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	NER=O
3	bomo	biti	AUX	Va-f1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	4	aux	_	NER=O
4	namenili	nameniti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	NER=O
5	prehrani	prehrana	NOUN	Ncfsd	Case=Dat|Gender=Fem|Number=Sing	4	iobj	_	NER=O|SpaceAfter=No
6	.	.	PUNCT	Z	_	4	punct	_	NER=O

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


