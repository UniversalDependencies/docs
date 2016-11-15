

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Japanese)

This relation is a language-specific subtype of [acl]().

5780 nodes (6%) are attached to their parents as `acl:relcl`.

5754 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46332179930796.

The following 20 pairs of parts of speech are connected with `acl:relcl`: [ja-pos/NOUN]()-[ja-pos/VERB]() (3966; 69% instances), [ja-pos/NOUN]()-[ja-pos/ADJ]() (1367; 24% instances), [ja-pos/NOUN]()-[ja-pos/NOUN]() (310; 5% instances), [ja-pos/NUM]()-[ja-pos/VERB]() (67; 1% instances), [ja-pos/PRON]()-[ja-pos/VERB]() (19; 0% instances), [ja-pos/VERB]()-[ja-pos/VERB]() (10; 0% instances), [ja-pos/NOUN]()-[ja-pos/NUM]() (7; 0% instances), [ja-pos/PRON]()-[ja-pos/ADJ]() (6; 0% instances), [ja-pos/VERB]()-[ja-pos/ADJ]() (6; 0% instances), [ja-pos/ADJ]()-[ja-pos/VERB]() (4; 0% instances), [ja-pos/ADV]()-[ja-pos/VERB]() (4; 0% instances), [ja-pos/NUM]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/PRON]()-[ja-pos/NOUN]() (3; 0% instances), [ja-pos/NUM]()-[ja-pos/ADJ]() (2; 0% instances), [ja-pos/ADV]()-[ja-pos/ADJ]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/DET]() (1; 0% instances), [ja-pos/NOUN]()-[ja-pos/PRON]() (1; 0% instances), [ja-pos/NUM]()-[ja-pos/NUM]() (1; 0% instances), [ja-pos/VERB]()-[ja-pos/NOUN]() (1; 0% instances), [ja-pos/X]()-[ja-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl:relcl	color:blue
1	背中に	_	NOUN	NOUN-POSTP	_	2	nmod	_	_
2	背負った	_	VERB	VERB-AUX	_	3	acl:relcl	_	_
3	ブースターを	_	NOUN	NOUN-PRT	_	4	nmod	_	_
4	使って	_	VERB	VERB	_	0	root	_	_
5	空中飛行を	_	NOUN	NOUN-PRT	_	6	nmod	_	_
6	行う。	_	VERB	VERB-AUX	_	4	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl:relcl	color:blue
1	多彩な	_	ADJ	ADJ	_	2	acl:relcl	_	_
2	ライブアクトとともに	_	NOUN	NOUN-POSTP	_	7	nmod	_	_
3	、	_	PUNCT	.	_	2	punct	_	_
4	祝日前の	_	NOUN	NOUN-POSTP	_	5	nmod	_	_
5	渋谷の	_	NOUN	NOUN-POSTP	_	6	nmod	_	_
6	夜を	_	NOUN	NOUN-PRT	_	7	nmod	_	_
7	盛り上げてくれそうだ。	_	VERB	VERB-AUX-AUX-AUX	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl:relcl	color:blue
1	以上の	_	NOUN	NOUN-POSTP	_	2	nmod	_	_
2	操作を	_	NOUN	NOUN-PRT	_	4	nmod	_	_
3	再帰的に	_	ADJ	ADJ	_	4	advmod	_	_
4	繰り返すと	_	VERB	VERB-AUX-CONJ	_	7	advcl	_	_
5	以下のような	_	NOUN	NOUN-POSTP-NOUN-VERB	_	6	acl:relcl	_	_
6	決定木が	_	NOUN	NOUN-PRT	_	7	nmod	_	_
7	出力される。	_	VERB	VERB-PASSIVE-AUX	_	0	root	_	_

~~~


