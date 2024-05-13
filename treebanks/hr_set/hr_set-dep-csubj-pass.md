---
layout: base
title:  'Statistics of csubj:pass in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-csubj.html">csubj</a></tt>.

63 nodes (0%) are attached to their parents as `csubj:pass`.

63 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.74603174603175.

The following 7 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (25; 40% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (22; 35% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (7; 11% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj:pass	color:blue
1	Vjeruje	vjerovati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	1	expl:pv	_	_
3	da	da	SCONJ	Cs	_	6	mark	_	_
4	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	je	on	PRON	Pp3fsa	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	donijeli	donijeti	VERB	Vmp-pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	1	csubj:pass	_	_
7	putnici	putnik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
8	u	u	ADP	Sl	Case=Loc	10	case	_	_
9	trgovačkim	trgovački	ADJ	Agpmply	Case=Loc|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
10	karavanima	karavan	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj:pass	color:blue
1	U	u	ADP	Sl	Case=Loc	2	case	_	_
2	Studiju	studio	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
3	nije	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	advmod	_	_
4	objašnjeno	objasniti	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	zašto	zašto	ADV	Rgp	Degree=Pos|PronType=Int,Rel	9	advmod	_	_
6	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	9	aux	_	_
7	Mateo	Mateo	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	ne	ne	PART	Qz	Polarity=Neg	9	advmod	_	_
9	preziva	prezivati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	csubj:pass	_	_
10	kao	kao	SCONJ	Cs	_	11	case	_	_
11	otac	otac	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	,	,	PUNCT	Z	_	14	punct	_	_
13	nego	nego	CCONJ	Cc	_	14	cc	_	_
14	Kariolić	Kariolić	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	conj	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj:pass	color:blue
1	Moglo	moći	VERB	Vmp-sn	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	bi	biti	AUX	Vaa3s	Mood=Cnd|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	aux	_	_
3	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	reći	reći	VERB	Vmn	VerbForm=Inf	1	xcomp	_	_
5	da	da	SCONJ	Cs	_	10	mark	_	_
6	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
7	u	u	ADP	Sl	Case=Loc	8	case	_	_
8	Hrvatskoj	Hrvatska	PROPN	Npfsl	Case=Loc|Gender=Fem|Number=Sing	10	obl	_	_
9	više	mnogo	ADV	Rgc	Degree=Cmp	10	advmod	_	_
10	stvaran	stvaran	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	csubj:pass	_	_
11	kult	kult	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
12	nerada	nerad	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
13	nego	nego	CCONJ	Cc	_	14	cc	_	_
14	kult	kult	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	11	conj	_	_
15	rada	rad	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	1	punct	_	_

~~~


