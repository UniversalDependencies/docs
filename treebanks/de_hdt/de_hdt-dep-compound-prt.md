---
layout: base
title:  'Statistics of compound:prt in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `compound:prt`

This relation is a language-specific subtype of .

3783 nodes (1%) are attached to their parents as `compound:prt`.

3601 instances of `compound:prt` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.72191382500661.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (3700; 98% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (43; 1% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (36; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 compound:prt	color:blue
1	Amazon.com	Amazon.com	PROPN	NE	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	schließt	schließen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	Handel	Handel	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	2	obj	_	_
4	mit	mit	ADP	APPR	Case=Dat	5	case	_	_
5	Kundendaten	Datum	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	3	nmod	_	_
6	nicht	nicht	PART	PTKNEG	_	2	advmod	_	_
7	aus	aus	ADP	PTKVZ	_	2	compound:prt	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound:prt	color:blue
1	Freemailer	Freemailer	PROPN	NE	Case=Nom|Person=3	3	nsubj	_	_
2	GMX	GMX	PROPN	NE	Case=Nom|Number=Sing|Person=3	1	flat:name	_	_
3	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	noch	noch	ADV	ADV	_	3	advmod	_	_
5	viel	viel	PRON	PIS	Number=Sing|Person=3	3	obj	_	_
6	vor	vor	ADP	PTKVZ	_	3	compound:prt	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:prt	color:blue
1	Die	Die	DET	ART	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	Expo-Gesellschaft	Gesellschaft	NOUN	NN	Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
3	kann	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux	_	_
4	einem	ein	PRON	PIS	Case=Dat|Gender=Neut|Number=Sing|Person=3	7	obj	_	_
5	langsam	langsam	ADJ	ADJD	Degree=Pos	7	advmod	_	_
6	leid	leid	ADJ	ADJD	Degree=Pos	7	compound:prt	_	_
7	tun	tun	VERB	VVINF	_	0	root	_	_
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


