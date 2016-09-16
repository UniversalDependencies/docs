

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

3712 nodes (1%) are attached to their parents as `nummod`.

3700 instances of `nummod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69234913793103.

The following 12 pairs of parts of speech are connected with `nummod`: [ar-pos/NOUN]()-[ar-pos/NUM]() (1856; 50% instances), [ar-pos/NUM]()-[ar-pos/NUM]() (1493; 40% instances), [ar-pos/ADJ]()-[ar-pos/NUM]() (158; 4% instances), [ar-pos/X]()-[ar-pos/NUM]() (137; 4% instances), [ar-pos/PRON]()-[ar-pos/NUM]() (25; 1% instances), [ar-pos/VERB]()-[ar-pos/NUM]() (20; 1% instances), [ar-pos/DET]()-[ar-pos/NUM]() (14; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (5; 0% instances), [ar-pos/ADP]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/PROPN]()-[ar-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	موجز	مُوجَز	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Vform=مُوجَزُ|Gloss=summary,abstract|Root=w_^g_z|Translit=mūǧazu|LTranslit=mūǧaz
2	انباء	نَبَأ	NOUN	N------P2R	Case=Gen|Definite=Red|Number=Plur	1	nmod	_	Vform=أَنبَاءِ|Gloss=news_item,report|Root=n_b_'|Translit=ʾanbāʾi|LTranslit=nabaʾ
3	العالم	عَالَم	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	Vform=اَلعَالَمِ|Gloss=world|Root=`_l_m|Translit=al-ʿālami|LTranslit=ʿālam
4	حتى	حَتَّى	ADP	P---------	AdpType=Prep	5	case	_	Vform=حَتَّى|Gloss=until,up_to|Root=.h_t_t|Translit=ḥattā|LTranslit=ḥattā
5	الساعة	سَاعَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	Vform=اَلسَّاعَةِ|Gloss=hour,time|Root=s_w_`|Translit=as-sāʿati|LTranslit=sāʿat
6	13،00	13،00	NUM	Q---------	NumForm=Digit	5	nummod	_	Vform=١٣٠٠|Translit=13،00
7	تغ	تغ	X	Y---------	Abbr=Yes	6	nmod	_	Vform=تغ|Gloss=G.M.T.|Root=t.g|Translit=tġ|LTranslit=tġ
8	من	مِن	ADP	P---------	AdpType=Prep	9	case	_	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
9	اليوم	يَوم	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	Vform=اَليَومِ|Gloss=day,today|Root=y_w_m|Translit=al-yawmi|LTranslit=yawm
10	الثلاثاء	ثُلَاثَاء	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	9	nmod	_	Vform=اَلثُّلَاثَاءِ|Gloss=Tuesday|Root=_t_l__t|Translit=aṯ-ṯulāṯāʾi|LTranslit=ṯulāṯāʾ

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 nummod	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	بلغت	بَلَغ	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=بَلَغَت|Gloss=reach,attain|Root=b_l_.g|Translit=balaġat|LTranslit=balaġ
3	قيمة	قِيمَة	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	2	nsubj	_	Vform=قِيمَةُ|Gloss=value,worth,amount,quantity|Root=q_w_m|Translit=qīmatu|LTranslit=qīmat
4	انتقال	اِنتِقَال	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	3	nmod	_	Vform=اِنتِقَالِ|Gloss=transfer,communication|Root=n_q_l|Translit=intiqāli|LTranslit=intiqāl
5	راباييتش	راباييتش	X	U---------	_	4	nmod	_	Vform=راباييتش|Translit=rAbAyyt$
6	(	(	PUNCT	G---------	_	7	punct	_	SpaceAfter=No|Vform=(|Translit=(
7	27	27	NUM	Q---------	NumForm=Digit	5	dep	_	Vform=٢٧|Translit=27
8	عاما	عَام	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	7	nmod	_	SpaceAfter=No|Vform=عَامًا|Gloss=year|Root=`_w_m|Translit=ʿāman|LTranslit=ʿām
9	)	)	PUNCT	G---------	_	7	punct	_	Vform=)|Translit=)
10	نحو	نَحوَ	ADP	PI------4-	AdpType=Prep|Case=Acc	11	case	_	Vform=نَحوَ|Gloss=towards,approximately|Root=n_.h_w|Translit=naḥwa|LTranslit=naḥwa
11	5	5	NUM	Q---------	NumForm=Digit	2	dobj	_	SpaceAfter=No|Vform=٥|Translit=5
12	ر	ر	PUNCT	G---------	_	11	punct	_	SpaceAfter=No|Vform=ر|Gloss=(_numeric_comma_)|Root=r|Translit=r|LTranslit=r
13	17	17	NUM	Q---------	NumForm=Digit	11	conj	_	Vform=١٧|Translit=17
14	مليون	مِليُون	NUM	QM-----S2R	Case=Gen|Definite=Red|Number=Sing|NumForm=Word	11	nummod	_	Vform=مِليُونِ|Gloss=million|Root=m_l_y_n|Translit=milyūni|LTranslit=milyūn
15	دولار	دُولَار	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	14	nmod	_	SpaceAfter=No|Vform=دُولَارٍ|Gloss=dollar|Root=dUlAr|Translit=dūlārin|LTranslit=dūlār
16	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nummod	color:blue
1	مصير	مَصِير	NOUN	N------S1R	Case=Nom|Definite=Red|Number=Sing	0	root	_	Vform=مَصِيرُ|Gloss=path,destiny,fate|Root=.s_y_r|Translit=maṣīru|LTranslit=maṣīr
2	"	"	PUNCT	G---------	_	3	punct	_	SpaceAfter=No|Vform="|Translit="
3	فايزر	فايزر	X	U---------	_	1	nmod	_	Vform=فايزر|Translit=fAyzr
4	مصر	مصر	X	U---------	_	3	nmod	_	SpaceAfter=No|Vform=مصر|Translit=mSr
5	"	"	PUNCT	G---------	_	3	punct	_	Vform="|Translit="
6	أمام	أَمَامَ	ADP	PI------4-	AdpType=Prep|Case=Acc	7	case	_	Vform=أَمَامَ|Gloss=in_front_of,facing|Root='_m_m|Translit=ʾamāma|LTranslit=ʾamāma
7	عمومية	عُمُومِيّ	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	1	amod	_	Vform=عُمُومِيَّةٍ|Gloss=general,public,common|Root=`_m_m|Translit=ʿumūmīyatin|LTranslit=ʿumūmīy
8	غير	غَير	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	7	nmod	_	Vform=غَيرِ|Gloss=other,unlike,not,non_-|Root=.g_y_r|Translit=ġayri|LTranslit=ġayr
9	عادية	عَادِيّ	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No|Vform=عَادِيَّةٍ|Gloss=ordinary,regular,normal|Root=`_w_d|Translit=ʿādīyatin|LTranslit=ʿādīy
10	"	"	PUNCT	G---------	_	9	punct	_	Vform="|Translit="
11	29	29	NUM	Q---------	NumForm=Digit	7	nummod	_	Vform=٢٩|Translit=29
12	فبراير	فِبرَايِر	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	11	nmod	_	Vform=فِبرَايِرَ|Gloss=February|Root=fibrAyir|Translit=fibrāyira|LTranslit=fibrāyir

~~~


