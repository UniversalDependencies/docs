---
layout: base
title:  'Statistics of obj in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `obj`

This relation is universal.

238 nodes (5%) are attached to their parents as `obj`.

176 instances of `obj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81932773109244.

The following 16 pairs of parts of speech are connected with `obj`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (146; 61% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (67; 28% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Și	și	CCONJ	_	Polarity=Pos	4	cc:preconj	_	_
3	cum	cum	ADV	_	PronType=Int,Rel	4	advmod	_	_
4	facem	face	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	să	să	PART	_	Mood=Sub	7	mark	_	_
6	îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:poss	_	_
7	văd	vedea	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	corpul	corp	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	6	vocative:mention	_	_
2	Eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	6	nsubj	_	_
3	iubita	iubit	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	appos	_	_
4	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
5	te	te	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	6	obj	_	_
6	pup	pupa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	dulce	dulce	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	xcomp	_	_
8	la	la	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	păsărica	păsărică	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	10	obl	_	CorrectForm=păsărică
10	vrei	vrea	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Aoleu	aoleu	INTJ	_	_	0	root	_	_
3	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	obj	_	_
4	bună	bun	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	_
5	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	😍	😍	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
7	😍	😍	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
8	💋	💋	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
9	💋	💋	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
10	💋	💋	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
11	💋	💋	SYM	_	_	2	discourse:emo	_	SpaceAfter=No

~~~


