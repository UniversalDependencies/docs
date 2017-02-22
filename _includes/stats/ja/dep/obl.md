

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese)

This relation is universal.

8349 nodes (5%) are attached to their parents as `obl`.

8349 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.16097736255839.

The following 16 pairs of parts of speech are connected with `obl`: [ja-pos/VERB]()-[ja-pos/NOUN]() (5930; 71% instances), [ja-pos/VERB]()-[ja-pos/PROPN]() (704; 8% instances), [ja-pos/ADJ]()-[ja-pos/NOUN]() (668; 8% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (576; 7% instances), [ja-pos/VERB]()-[ja-pos/PRON]() (202; 2% instances), [ja-pos/NOUN]()-[ja-pos/PROPN]() (84; 1% instances), [ja-pos/ADJ]()-[ja-pos/PROPN]() (53; 1% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (26; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (24; 0% instances), [ja-pos/PROPN]()-[ja-pos/NOUN]() (24; 0% instances), [ja-pos/PROPN]()-[ja-pos/PROPN]() (24; 0% instances), [ja-pos/ADJ]()-[ja-pos/PRON]() (23; 0% instances), [ja-pos/NUM]()-[ja-pos/PROPN]() (5; 0% instances), [ja-pos/ADV]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/ADV]()-[ja-pos/PRON]() (2; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 obl	color:blue
1	大正	大正	NOUN	_	_	2	compound	_	SpaceAfter=No
2	期	期	NOUN	_	_	10	obl	_	SpaceAfter=No
3	から	から	ADP	_	_	2	case	_	SpaceAfter=No
4	、	、	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	ノンフィクション	ノンフィクション	NOUN	_	_	7	nmod	_	SpaceAfter=No
6	、	、	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	推理小説	推理小説	NOUN	_	_	10	obj	_	SpaceAfter=No
8	など	など	ADP	_	_	7	case	_	SpaceAfter=No
9	を	を	ADP	_	_	7	case	_	SpaceAfter=No
10	訳	訳	VERB	_	_	0	root	_	SpaceAfter=No
11	し	する	AUX	_	_	10	aux	_	SpaceAfter=No
12	た	た	AUX	_	_	10	aux	_	SpaceAfter=No
13	。	。	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 11 obl	color:blue
1	ただし	ただし	CCONJ	_	_	18	advmod	_	SpaceAfter=No
2	、	、	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	50	50	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
4	周年	周年	NOUN	_	_	5	compound	_	SpaceAfter=No
5	ソング	ソング	NOUN	_	_	18	iobj	_	SpaceAfter=No
6	に	に	ADP	_	_	5	case	_	SpaceAfter=No
7	変更	変更	NOUN	_	_	8	compound	_	SpaceAfter=No
8	後	後	NOUN	_	_	18	nsubj	_	SpaceAfter=No
9	は	は	ADP	_	_	8	case	_	SpaceAfter=No
10	、	、	PUNCT	_	_	8	punct	_	SpaceAfter=No
11	ED	ED	PROPN	_	_	18	obl	_	SpaceAfter=No
12	も	も	ADP	_	_	11	case	_	SpaceAfter=No
13	歌	歌	NOUN	_	_	14	compound	_	SpaceAfter=No
14	つき	つき	NOUN	_	_	16	nmod	_	SpaceAfter=No
15	の	の	ADP	_	_	14	case	_	SpaceAfter=No
16	もの	もの	NOUN	_	_	18	nsubj	_	SpaceAfter=No
17	が	が	ADP	_	_	16	case	_	SpaceAfter=No
18	使わ	使う	VERB	_	_	0	root	_	SpaceAfter=No
19	れ	れる	AUX	_	_	18	aux	_	SpaceAfter=No
20	た	た	AUX	_	_	18	aux	_	SpaceAfter=No
21	。	。	PUNCT	_	_	18	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	姉	姉	NOUN	_	_	3	obl	_	SpaceAfter=No
2	と	と	ADP	_	_	1	case	_	SpaceAfter=No
3	同じ	同じ	ADJ	_	_	4	acl	_	SpaceAfter=No
4	先生	先生	NOUN	_	_	10	obl	_	SpaceAfter=No
5	だっ	だ	AUX	_	_	4	cop	_	SpaceAfter=No
6	た	た	AUX	_	_	4	aux	_	SpaceAfter=No
7	ので	ので	SCONJ	_	_	4	mark	_	SpaceAfter=No
8	、	、	PUNCT	_	_	4	punct	_	SpaceAfter=No
9	話	話	NOUN	_	_	10	obl	_	SpaceAfter=No
10	やすかっ	やすい	ADJ	_	_	0	root	_	SpaceAfter=No
11	た	た	AUX	_	_	10	aux	_	SpaceAfter=No
12	です	だ	AUX	_	_	10	cop	_	SpaceAfter=No
13	。	。	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


