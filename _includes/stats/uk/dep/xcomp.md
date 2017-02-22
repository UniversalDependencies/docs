

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

161 nodes (1%) are attached to their parents as `xcomp`.

158 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77639751552795.

The following 9 pairs of parts of speech are connected with `xcomp`: [uk-pos/VERB]()-[uk-pos/VERB]() (129; 80% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (19; 12% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (5; 3% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (3; 2% instances), [uk-pos/ADJ]()-[uk-pos/ADJ]() (1; 1% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (1; 1% instances), [uk-pos/INTJ]()-[uk-pos/VERB]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (1; 1% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Під	під	ADP	Spsa	Case=Acc	2	case	_	_
2	вечір	вечір	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	5	obl	_	_
3	над	над	ADP	Spsi	Case=Ins	4	case	_	_
4	нами	ми	PRON	Pp-1-ypin	Animacy=Anim|Case=Ins|Number=Plur|Person=1|PronType=Prs	6	obl	_	_
5	почав	почати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	літати	літати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	5	xcomp	_	_
7	військовий	військовий	ADJ	Ao-msnf	Case=Nom|Gender=Masc	8	amod	_	_
8	вертоліт	вертоліт	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	5	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	U	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Хоч	хоч	SCONJ	Css	_	6	mark	_	_
2	наше	наш	DET	Ppp1n-saa	Case=Acc|Gender=Neut|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
3	вікно	вікно	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut	6	obj	_	_
4	важко	важко	ADV	Rp	Degree=Pos	6	advmod	_	_
5	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
6	зробити	зробити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	0	root	_	_
7	темним	темний	ADJ	Afpnsif	Case=Ins|Degree=Pos|Gender=Neut	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 xcomp	color:blue
1	Те	те	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	11	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	U	_	7	punct	_	_
3	що	що	SCONJ	Css	_	7	mark	_	_
4	в	в	ADP	Spsl	Case=Loc	5	case	_	_
5	основі	основа	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	7	obl	_	_
6	її	вона	DET	Ppp3f-sga	Case=Gen|Gender=Fem|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
7	лежать	лежати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	_
8	записи	запис	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	U	_	7	punct	_	_
10	є	бути	AUX	Vapip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	безперечним	безперечний	ADJ	Ao-nsif	Case=Ins|Gender=Neut	0	root	_	SpaceAfter=No
12	:	:	PUNCT	U	_	15	punct	_	_
13	ніхто	ніхто	PRON	Pz---y-nn	Animacy=Anim|Case=Nom|PronType=Neg	15	nsubj	_	_
14	не	не	PART	Q	Polarity=Neg	15	advmod	_	_
15	здатен	здатний	ADJ	Ao-msns	Case=Nom|Gender=Masc|Variant=Short	11	parataxis	_	_
16	таких	такий	DET	Pd----pga	Case=Gen|Number=Plur|PronType=Dem	17	det	_	_
17	речей	річ	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	18	obj	_	_
18	підробити	підробити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	15	xcomp	_	SpaceAfter=No
19	.	.	PUNCT	U	_	11	punct	_	_

~~~


