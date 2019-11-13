---
layout: base
title:  'Statistics of csubj in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `csubj`

This relation is universal.

210 nodes (0%) are attached to their parents as `csubj`.

203 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.23333333333333.

The following 15 pairs of parts of speech are connected with `csubj`: <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (61; 29% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (44; 21% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (39; 19% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (29; 14% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (13; 6% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sr_set-pos-DET.html">DET</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Očekuje	očekivati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	1	compound	_	_
3	da	da	SCONJ	Cs	_	5	mark	_	_
4	Komisija	komisija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	predstavi	predstaviti	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	_
6	svoje	svoj	DET	Px-fpa	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
7	preporuke	preporuka	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	_
8	6.	6.	NUM	Mdo	NumType=Ord	9	nummod	_	_
9	decembra	decembar	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	Nije	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	tačno	tačno	ADJ	Agpnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	da	da	SCONJ	Cs	_	6	mark	_	_
5	otpuštanja	otpuštanje	NOUN	Ncnpn	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
6	imaju	imati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	_
7	političku	politički	ADJ	Agpfsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	pozadinu	pozadina	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	To	taj	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	retki	redak	ADJ	Agpmpny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
4	zločini	zločin	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
5	koje	koji	DET	Pi-mpa	Case=Acc|Gender=Masc|Number=Plur|PronType=Int,Rel	9	obj	_	_
6	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	zaista	zaista	ADV	Rgp	Degree=Pos	8	advmod	_	_
8	moguće	moguće	ADV	Rgp	Degree=Pos	4	acl	_	_
9	sprečiti	sprečiti	VERB	Vmn	VerbForm=Inf	8	csubj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


