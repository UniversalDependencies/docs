---
layout: base
title:  'Statistics of parataxis in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="pl_pdb-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="pl_pdb-dep-parataxis-obj.html">parataxis:obj</a></tt>.

283 nodes (0%) are attached to their parents as `parataxis`.

281 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.0530035335689.

The following 22 pairs of parts of speech are connected with `parataxis`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (178; 63% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (22; 8% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (20; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (17; 6% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Tym	ten	DET	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	razem	raz	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	obl	4:obl	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	zdążyli	zdążyć	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	:	:	PUNCT	interp	PunctType=Colo	4	punct	4:punct	_
6	skoczył	skoczyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	_
7	głową	głowa	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	6	obl	6:obl	_
8	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Acc
9	dół	dół	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis	color:blue
1	38.32	38.32	X	dig	NumForm=Digit	2	list	2:list	_
2	Usługi	usługa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	0	root	0:root	_
3	związane	związać	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	amod	2:amod	_
4	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Ins
5	odzyskiem	odzysk	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl:arg	3:obl:arg	_
6	surowców	surowiec	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod:arg	5:nmod:arg	_
7	sortowanych	sortować	ADJ	ppas:pl:gen:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	6	amod	6:amod	SpaceAfter=No
8	;	;	PUNCT	interp	PunctType=Semi	2	punct	2:punct	_
9	surowce	surowiec	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	parataxis	2:parataxis	_
10	wtórne	wtórny	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	9:amod	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Ale	ale	CCONJ	conj	_	4	cc	4:cc	_
2	bitwa	bitwa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
3	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	ciężka	ciężki	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
5	:	:	PUNCT	interp	PunctType=Colo	4	punct	4:punct	_
6	udeptali	udeptać	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	_
7	ziemię	ziemia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	_
8	jak	jak	SCONJ	comp	ConjType=Comp	10	mark	10:mark	_
9	na	na	ADP	prep:loc	AdpType=Prep	10	case	10:case	Case=Loc
10	turnieju	turniej	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	advcl:cmp	6:advcl:cmp	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


