

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Old_Church_Slavonic)

This relation is universal.

91 nodes (0%) are attached to their parents as `dep`.

59 instances of `dep` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 7 pairs of parts of speech are connected with `dep`: [cu-pos/VERB]()-[cu-pos/NOUN]() (35; 38% instances), [cu-pos/VERB]()-[cu-pos/PRON]() (31; 34% instances), [cu-pos/VERB]()-[cu-pos/ADJ]() (10; 11% instances), [cu-pos/VERB]()-[cu-pos/PROPN]() (9; 10% instances), [cu-pos/VERB]()-[cu-pos/VERB]() (3; 3% instances), [cu-pos/NOUN]()-[cu-pos/NUM]() (2; 2% instances), [cu-pos/ADV]()-[cu-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	трьсти	трьсть	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	4	dep	_	ref=LUKE_7.24
2	ли	ли	ADV	Du	PronType=Int	0	root	_	ref=LUKE_7.24
3	вѣтромъ	вѣтръ	NOUN	Nb	Case=Ins|Gender=Masc|Number=Sing	4	obl:agent	_	ref=LUKE_7.24
4	движемꙑ	двиѕати	VERB	V-	Case=Gen|Gender=Fem|Number=Sing|Strength=Strong|Tense=Pres|VerbForm=Part|Voice=Pass	2	advcl	_	ref=LUKE_7.24

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep	color:blue
1	добро	добръ	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Strength=Strong	2	obj:dir	_	ref=MATT_5.44
2	творите	творити	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.44
3	ненавидѧштиимъ	ненавидѣти	VERB	V-	Case=Dat|Gender=Masc|Number=Plur|Strength=Weak|Tense=Pres|VerbForm=Part|Voice=Act	2	advcl	_	ref=MATT_5.44
4	васъ	вꙑ	PRON	Pp	Case=Gen|Number=Plur|Person=2|PronType=Prs	3	dep	_	ref=MATT_5.44

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep	color:blue
1	не	не	ADV	Df	Polarity=Neg	2	advmod	_	ref=MATT_24.2
2	видите	видѣти	VERB	V-	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_24.2
3	ли	ли	ADV	Du	PronType=Int	2	advmod	_	ref=MATT_24.2
4	вьсѣхъ	вьсь	DET	Px	Case=Gen|Number=Plur	5	det	_	ref=MATT_24.2
5	сихъ	сь	ADJ	Pd	Case=Gen|Gender=Neut|Number=Plur	2	dep	_	ref=MATT_24.2

~~~


