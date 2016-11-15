

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

3258 nodes (3%) are attached to their parents as `cc`.

2880 instances of `cc` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.12124002455494.

The following 30 pairs of parts of speech are connected with `cc`: [sk-pos/VERB]()-[sk-pos/CONJ]() (1652; 51% instances), [sk-pos/NOUN]()-[sk-pos/CONJ]() (909; 28% instances), [sk-pos/ADJ]()-[sk-pos/CONJ]() (237; 7% instances), [sk-pos/PROPN]()-[sk-pos/CONJ]() (217; 7% instances), [sk-pos/VERB]()-[sk-pos/PART]() (49; 2% instances), [sk-pos/ADV]()-[sk-pos/CONJ]() (42; 1% instances), [sk-pos/NUM]()-[sk-pos/CONJ]() (35; 1% instances), [sk-pos/PRON]()-[sk-pos/CONJ]() (29; 1% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (15; 0% instances), [sk-pos/X]()-[sk-pos/CONJ]() (12; 0% instances), [sk-pos/NOUN]()-[sk-pos/X]() (7; 0% instances), [sk-pos/NUM]()-[sk-pos/PART]() (7; 0% instances), [sk-pos/PART]()-[sk-pos/PART]() (6; 0% instances), [sk-pos/PRON]()-[sk-pos/PART]() (6; 0% instances), [sk-pos/PROPN]()-[sk-pos/PART]() (5; 0% instances), [sk-pos/ADV]()-[sk-pos/PART]() (4; 0% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (4; 0% instances), [sk-pos/X]()-[sk-pos/X]() (4; 0% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (3; 0% instances), [sk-pos/ADJ]()-[sk-pos/PRON]() (2; 0% instances), [sk-pos/CONJ]()-[sk-pos/CONJ]() (2; 0% instances), [sk-pos/PART]()-[sk-pos/CONJ]() (2; 0% instances), [sk-pos/X]()-[sk-pos/PART]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/PART]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/X]() (1; 0% instances), [sk-pos/ADP]()-[sk-pos/CONJ]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/VERB]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/SYM]() (1; 0% instances), [sk-pos/PART]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/SYM]()-[sk-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	A	a	CONJ	O	_	4	cc	_	_
2	tentoraz	tentoraz	ADV	Dx	Degree=Pos	4	advmod	_	_
3	vraj	vraj	PART	T	_	4	advmod	_	_
4	povezie	viezť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	aj	aj	CONJ	O	_	6	advmod:emph	_	_
6	zatykače	zatykač	NOUN	SSip4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	dobj	_	_
7	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cc	color:blue
1	KĽDR	kľdr	X	W	Abbr=Yes	2	nsubj	_	_
2	je	byť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	však	však	PART	T	_	2	advmod	_	_
4	na	na	ADP	Eu6	AdpType=Prep|Case=Loc	5	case	_	_
5	kolenách	koleno	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	2	nmod	_	_
6	počas	počas	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	kalamity	kalamita	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
8	aj	aj	CONJ	O	_	7	cc	_	_
9	po	po	ADP	Eu6	AdpType=Prep|Case=Loc	10	case	_	_
10	nej	ona	PRON	PFfs6	Case=Loc|Gender=Fem|Number=Sing|PronType=Prs	7	conj	_	_
11	.	.	PUNCT	ZIP	VerbForm=Inf	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	Zmiernite	zmierniť	VERB	VMdpb+	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	svoje	svoj	PRON	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	7	nmod	_	_
3	doterajšie	doterajší	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
4	pracovné	pracovný	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
5	a	a	CONJ	O	_	4	cc	_	_
6	životné	životný	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	4	conj	_	_
7	tempo	tempo	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	1	dobj	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


