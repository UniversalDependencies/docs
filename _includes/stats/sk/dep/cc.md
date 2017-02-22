

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

2875 nodes (3%) are attached to their parents as `cc`.

2845 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07686956521739.

The following 35 pairs of parts of speech are connected with `cc`: [sk-pos/VERB]()-[sk-pos/CCONJ]() (1494; 52% instances), [sk-pos/NOUN]()-[sk-pos/CCONJ]() (743; 26% instances), [sk-pos/ADJ]()-[sk-pos/CCONJ]() (254; 9% instances), [sk-pos/PROPN]()-[sk-pos/CCONJ]() (128; 4% instances), [sk-pos/ADV]()-[sk-pos/CCONJ]() (55; 2% instances), [sk-pos/VERB]()-[sk-pos/PART]() (45; 2% instances), [sk-pos/NUM]()-[sk-pos/CCONJ]() (26; 1% instances), [sk-pos/PRON]()-[sk-pos/CCONJ]() (20; 1% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (13; 0% instances), [sk-pos/NOUN]()-[sk-pos/SCONJ]() (13; 0% instances), [sk-pos/DET]()-[sk-pos/CCONJ]() (9; 0% instances), [sk-pos/X]()-[sk-pos/CCONJ]() (9; 0% instances), [sk-pos/NOUN]()-[sk-pos/X]() (7; 0% instances), [sk-pos/ADV]()-[sk-pos/PART]() (6; 0% instances), [sk-pos/PART]()-[sk-pos/PART]() (6; 0% instances), [sk-pos/VERB]()-[sk-pos/ADV]() (6; 0% instances), [sk-pos/NUM]()-[sk-pos/PART]() (5; 0% instances), [sk-pos/PART]()-[sk-pos/CCONJ]() (5; 0% instances), [sk-pos/ADJ]()-[sk-pos/PART]() (4; 0% instances), [sk-pos/PROPN]()-[sk-pos/PART]() (4; 0% instances), [sk-pos/VERB]()-[sk-pos/SCONJ]() (3; 0% instances), [sk-pos/CCONJ]()-[sk-pos/CCONJ]() (2; 0% instances), [sk-pos/DET]()-[sk-pos/PART]() (2; 0% instances), [sk-pos/PROPN]()-[sk-pos/SCONJ]() (2; 0% instances), [sk-pos/X]()-[sk-pos/PART]() (2; 0% instances), [sk-pos/X]()-[sk-pos/SCONJ]() (2; 0% instances), [sk-pos/X]()-[sk-pos/X]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/SCONJ]() (1; 0% instances), [sk-pos/ADJ]()-[sk-pos/X]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/ADV]()-[sk-pos/SCONJ]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/DET]() (1; 0% instances), [sk-pos/NOUN]()-[sk-pos/SYM]() (1; 0% instances), [sk-pos/PART]()-[sk-pos/PRON]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	A	a	CCONJ	O	_	4	cc	_	_
2	tentoraz	tentoraz	ADV	Dx	Degree=Pos	4	advmod	_	_
3	vraj	vraj	PART	T	_	4	advmod	_	_
4	povezie	viezť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	aj	aj	CCONJ	O	_	6	advmod:emph	_	_
6	zatykače	zatykač	NOUN	SSip4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Po	po	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	_	_
2	Silvestri	silvester	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	zničení	zničený	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
5	aj	aj	CCONJ	O	_	6	cc	_	_
6	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_
8	aj	aj	CCONJ	O	_	9	cc	_	_
9	zvieratá	zviera	NOUN	SSnp1	Case=Nom|Gender=Neut|Number=Plur	6	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Zmiernite	zmierniť	VERB	VMdpb+	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	svoje	svoj	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
3	doterajšie	doterajší	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
4	pracovné	pracovný	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
5	a	a	CCONJ	O	_	6	cc	_	_
6	životné	životný	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	4	conj	_	_
7	tempo	tempo	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


