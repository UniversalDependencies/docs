---
layout: base
title:  'Statistics of obl:arg in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="sk-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="sk-dep-obl-agent.html">obl:agent</a></tt>.

1147 nodes (1%) are attached to their parents as `obl:arg`.

855 instances of `obl:arg` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72449869224063.

The following 19 pairs of parts of speech are connected with `obl:arg`: <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (660; 58% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (178; 16% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (103; 9% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PROPN.html">PROPN</a></tt> (97; 8% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (57; 5% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:arg	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
2	prvom	prvý	ADJ	NAis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	rade	rad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	vraj	vraj	PART	T	_	5	advmod	_	_
5	došlo	dôjsť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
6	k	k	ADP	Eu3	AdpType=Prep|Case=Dat	7	case	_	_
7	nepochopeniu	nepochopenie	NOUN	SSns3	Case=Dat|Gender=Neut|Number=Sing	5	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:arg	color:blue
1	Ja	ja	PRON	PPhs1	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
3	ale	ale	PART	T	_	6	advmod	_	_
4	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	5	case	_	_
5	nikoho	nikto	PRON	PFms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Neg	6	obl:arg	_	_
6	nehnevám	hnevať	VERB	VKesa-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	ZIP	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:arg	color:blue
1	"	"	PUNCT	ZIP	_	4	punct	_	SpaceAfter=No
2	Na	na	ADP	Eu4	AdpType=Prep|Case=Acc	3	case	_	_
3	to	to	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	_	_
4	je	byť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	veľmi	veľmi	ADV	Dx	Degree=Pos	6	advmod	_	_
6	skoro	skoro	ADV	Dx	Degree=Pos	4	advmod	_	SpaceAfter=No
7	.	.	PUNCT	ZIP	_	4	punct	_	_

~~~


