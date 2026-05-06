---
layout: base
title:  'Statistics of discourse in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `discourse`

This relation is universal.

66 nodes (1%) are attached to their parents as `discourse`.

60 instances of `discourse` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1969696969697.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (34; 52% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (10; 15% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PART.html">PART</a></tt> (6; 9% instances), <tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (5; 8% instances), <tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (5; 8% instances), <tt><a href="ruc_rdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ruc_rdt-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Iwe	iye	INTJ	_	_	3	discourse	3:discourse	Gloss=INTERJ|MSeg=iye
2	ekyo	o	PRON	_	Deixis=Med|NounClass=Bantu7|Person=3|PronType=Dem	3	obj	3:obj	Gloss=7.MED|MSeg=ekyo
3	tokifaku	faakua	VERB	_	Mood=Ind|NounClass=Bantu7|Number=Sing|Person=2|Person[obj]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	Gloss=NEG-2sgS-7O-care_for|MSeg=ti-o-ki-faaku|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	Nakoba	koba	VERB	_	Mood=Ind|NounClass=Bantu1|Person=3|Tense=Nar|VerbForm=Fin	0	root	0:root	Gloss=NAR-1S-say-FV|MSeg=n-a-kob-a|SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	5:punct	_
3	“	“	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
4	Bbee	bbe	INTJ	_	Polarity=Neg	5	discourse	5:discourse	Gloss=no|MSeg=bbe
5	mwojo	mwojo	NOUN	_	NounClass=Bantu1	1	ccomp	1:ccomp	Gloss=1.my_dear|MSeg=mwojo|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	Nje	nje	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	Gloss=1sg|MSeg=nje
2	na	na	PART	ADD.FOC	InfStruct=Foc	1	advmod:emph	1:advmod:emph	Gloss=ADD.FOC|MSeg=ni
3	ka	ka	PART	_	Hort=Yes	4	discourse	4:discourse	Gloss=HORT|MSeg=ka
4	nkukobere	koba	VERB	_	Mood=Sub|Number=Sing|Number[obj]=Sing|Person=1|Person[obj]=2|VerbForm=Fin|Voice=Appl	0	root	0:root	Gloss=1sgS-2sgO-say-APPL-SBJV|MSeg=n-ku-kob-er-e|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


