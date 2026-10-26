---
layout: base
title:  'Statistics of appos in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `appos`

This relation is universal.

15 nodes (0%) are attached to their parents as `appos`.

15 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13333333333333.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (3; 20% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (3; 20% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 appos	color:blue
1	quindi	quindi	ADV	_	_	4	advmod	_	Begin=400.115|KID=159-0
2	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	KID=159-1
3	relatore	relatore	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	KID=159-2
4	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=159-3
5	rossi	Rossi	PROPN	_	_	4	appos	_	KID=159-4
6	di	di	ADP	_	_	8	case	_	KID=159-5a
7	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	KID=159-5b
8	scuola	scuola	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	KID=159-6|OverlappingGroup=84
9	interpreti	interpreto	ADJ	_	Gender=Masc|Number=Plur	8	appos	_	End=402.885|Intonation=Falling|KID=159-7

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	boh	boh	INTJ	_	_	3	discourse	_	Begin=198.908|KID=133-0|Volume=Low
2	vedendo	vedere	VERB	_	VerbForm=Ger	3	reparandum	_	KID=133-1|OverlappingGroup=18|Volume=Low
3	vedendo	vedere	VERB	_	VerbForm=Ger	0	root	_	KID=133-2|OverlappingGroup=18
4	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	KID=133-3|OverlappingGroup=18|Prolonged=Yes
5	trascrizioni	trascrizione	NOUN	_	Gender=Fem|Number=Plur	3	obj	_	KID=133-4|Modality=laugh|Prolonged=Yes
6	d'	di	ADP	_	_	7	case	_	KID=133-5|Modality=laugh|SpaceAfter=No
7	inglese	inglese	NOUN	_	Number=Sing	5	nmod	_	KID=133-6|Modality=laugh
8	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	KID=133-7|Modality=laugh|OverlappingGroup=19
9	translation	translation	NOUN	_	Foreign=Yes	5	appos	_	KID=133-8|Modality=laugh|OverlappingGroup=19|ProsodicLink=Yes
10	eh	eh	INTJ	_	_	3	discourse	_	End=204.098|KID=133-9|Modality=laugh|OverlappingGroup=19|Prolonged=Yes

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	vuoi	volere	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Begin=997.8|KID=663-0|OverlappingGroup=
2	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	KID=663-1
3	bracialetto	bracialetto	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	KID=663-2
4	g~	g~	X	_	_	5	reparandum	_	Interrupted=Yes|KID=663-3
5	gold	Gold	PROPN	_	_	6	amod	_	KID=663-4
6	bunny	Bunny	PROPN	_	_	3	appos	_	End=999.51|Intonation=Rising|KID=663-5

~~~


