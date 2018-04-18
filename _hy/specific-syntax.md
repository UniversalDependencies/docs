---
layout: base
title:  'Syntax'
udver: '2'
---

# Specific constructions

## Clausal structures

In Armenian, the standard case pattern of a predicate-argument construction is as follows:

* the first argument (subject) is in the Nominative case;

* the second argument (direct object) is in the Nominative or Dative case;

* all other arguments are coded in other cases or in prepositional phrase depending their semantics.

However, there are constructions which have non canonical case patterns.

### Ablative subject

The constructions are instantiated by a middle voice verb, the first argument of which is in the Ablative case with a partitive meaning and not in the canonical Nominative case. The ablative argument is also labeled [nsubj]().

~~~ sdparse
Հնչեցին/VERB Կոմիտասի/PROPN[Case=Dat] երգերից/NOUN[Case=Abl|SpaceAfter=No] ։/PUNCT \n Sounded from-songs of-Komitas .
nsubj(Հնչեցին, երգերից)
nsubj(Sounded, from-songs)
nmod:poss(երգերից, Կոմիտասի)
nmod:poss(from-songs, of-Komitas)
punct(Հնչեցին, ։)
punct(Sounded, .)
~~~

## Adjectival and adverbial constructions

### Comparative constructions

Armenian qualitative adjectives and adverbs have only periphrastic comparative forms, most of them can have also a periphrastic superlative (see the [Degree]() feature), e. g. _խելացի_ “smart”, _ավելի խելացի_ “smarter”, _ամենախելացի_ “smartest”, _ամենից խելացի_, _բոլորից խելացի_ “smartest”. The morphological superlative forms are assigned the `Sup` [Degree]() feature. Equality comparisons are also periphrastic. If the standard of comparison is a nominal, it is marked morphologically by a ablative [Case]() or by a dative.

* _Արամը եղբորից <b>խելացի</b> / <b>ավելի խելացի</b> / է_ ։ “Aram is <b>smarter</b> than his brother.”
* _Արամը <b>ավելի խելացի</b> է, քան (թե) եղբայրը_ ։ “Aram is <b>smarter</b> than his brother.”
* _Արամը <b>նվազ / պակաս խելացի</b> է, քան (թե) եղբայրը_ ։ “Aram is <b>less smart</b> than his brother.”
* _Արամը <b>ամենից / բոլորից խելացի</b> / <b>ամենախելացի</b> ուսանողն է_ ։ “Aram is <b>the smartest one</b> of all the students.”
* _Արամը եղբոր պես / նման / չափ <b>խելացի</b> է_ ։ “Aram is <b>smart</b> as his brother.”

~~~ sdparse
Արամը/PROPN ամենախելացի/ADJ[Degree=Sup] ուսանողն/NOUN է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is the-smartest student .
nsubj(ուսանողն, Արամը)
amod(ուսանողն, ամենախելացի)
cop(ուսանողն, է)
punct(ուսանողն, ։)
nsubj(student, Aram)
amod(student, the-smartest)
cop(student, is)
punct(student, .)
~~~

To keep the analyses of the morphological and the periphrastic cases parallel
(and also to keep the analyses parallel cross-linguistically),
in the periphrastic examples the entity comapared to modifies still the adjective and not the adverb:

~~~ sdparse
Արամը/PROPN եղբորից/NOUN[Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing] ավելի/ADV[Degree=Cmp] խելացի/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is more smart than-his-brother .
nsubj(խելացի, Արամը)
cop(խելացի, է)
obl(խելացի, եղբորից)
advmod(խելացի, ավելի)
punct(խելացի, ։)
nsubj(smart, Aram)
cop(smart, is)
obl(smart, than-his-brother)
advmod(smart, more)
punct(smart, .)
~~~

~~~ sdparse
Արամը/PROPN ավելի/ADV[Degree=Cmp] խելացի/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ,/PUNCT քան/SCONJ եղբայրը/NOUN[Animacy=Inan|Case=Nom|Definite=Def|Number=Sing|SpaceAfter=No] ։/PUNCT \n Aram is more smart , than his-brother .

nsubj(խելացի, Արամը)
cop(խելացի, է)
advmod(խելացի, ավելի)
obl(խելացի, եղբայրը)
case(եղբայրը, քան)
punct(եղբայրը, ,-5)
punct(խելացի, ։)
nsubj(smart, Aram)
cop(smart, is)
advmod(smart, more)
obl(smart, his-brother)
case(his-brother, than)
punct(his-brother, ,-14)
punct(smart, .)
~~~

~~~ sdparse
Արամը/PROPN ամենից/PRON[Case=Abl|Number=Sing|PronType=Tot] խելացի/ADJ[Degree=Pos] ուսանողն/NOUN է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is the-smartest student of-all .
nsubj(ուսանողն, Արամը)
cop(ուսանողն, է)
obl(խելացի, ամենից)
amod(ուսանողն, խելացի)
punct(ուսանողն, ։)
nsubj(student, Aram)
cop(student, is)
obl(the-smartest, of-all)
amod(student, the-smartest)
punct(student, .)
~~~

~~~ sdparse
Նա/PRON ինձնից/PRON[Case=Abl] շատ/ADV[Degree=Pos] է/AUX կարդում/VERB[SpaceAfter=No] ։/PUNCT \n He is reading more than-me .
nsubj(կարդում, Նա)
aux(կարդում, է)
advmod(կարդում, շատ)
obl(շատ, ինձնից)
punct(կարդում, ։)
nsubj(reading, He)
aux(reading, is)
advmod(reading, more)
obl(more, than-me)
punct(reading, .)
~~~

Very commonly the base form of the adjective is used and the fact that it is being compared must be derived from the coding of the other participants, e.g., the standard of comparison.

~~~ sdparse
Արամը/PROPN եղբորից/NOUN[Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing] խելացի/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is smart than-his-brother .
nsubj(խելացի, Արամը)
cop(խելացի, է)
obl(խելացի, եղբորից)
punct(խելացի, ։)
nsubj(smart, Aram)
cop(smart, is)
obl(smart, than-his-brother)
punct(smart, .)
~~~

~~~ sdparse
Արամը/PROPN բոլորից/PRON[Case=Abl|Number=Sing|PronType=Tot] խելացի/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is smart of-all .
nsubj(խելացի, Արամը)
cop(խելացի, է)
obl(խելացի, բոլորից)
punct(խելացի, ։)
nsubj(smart, Aram)
cop(smart, is)
obl(smart, of-all)
punct(smart, .)
~~~

### Relations in Equality Comparison

In constructions of the form _as X as Y_ or _the same X as Y_, X and Y can be of a range of syntactic types. However, this first _as_ may not modify the head of X, it may modify an existing modifier of the head of X. Its role is adverbial ([advmod]()), consistent with other kinds of degree modification. We take the complement of the comparative (that is, the standard of comparison) as an oblique dependent of the first part. 

~~~ sdparse
Արամը/PROPN եղբոր/NOUN[Case=Dat|Definite=Ind|Number=Sing] չափ/ADP[AdpType=Post] խելացի/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is smart as his-brother .
nsubj(խելացի, Արամը)
cop(խելացի, է)
obl(խելացի, եղբոր)
case(եղբոր, չափ)
punct(խելացի, ։)
nsubj(smart, Aram)
cop(smart, is)
obl(smart, his-brother)
case(his-brother, as)
punct(smart, .)
~~~

~~~ sdparse
մթին/ADJ[Degree=Pos] ու/CCONJ սառը/ADJ[Degree=Pos|SpaceAfter=No] ,/PUNCT ինչպես/SCONJ շիրիմ/NOUN \n dark and cold , like a-grave
case(շիրիմ, ինչպես)
obl(մթին, շիրիմ)
cc(սառը, ու)
conj(մթին, սառը)
punct(շիրիմ, ,-4)
case(a-grave, like)
obl(dark, a-grave)
cc(cold, and)
conj(dark, cold)
punct(a-grave, ,-11)
~~~

~~~ sdparse
Նպատակասլացությունը/NOUN նույնքան/ADV[PronType=Dem] կարևոր/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ,/PUNCT որքան/SCONJ խաղացողի/NOUN տաղանդը/NOUN[SpaceAfter=No] ։/PUNCT \n Commitment is as important as a-player's talent .
nsubj(կարևոր, Նպատակասլացությունը)
cop(կարևոր, է)
advmod(կարևոր, նույնքան)
case(տաղանդը, որքան)
obl(կարևոր, տաղանդը)
nmpod:poss(տաղանդը, խաղացողի)
punct(կարևոր, ։)
punct(տաղանդը, ,)
nsubj(important, Commitment)
cop(important, is)
advmod(important, as-13)
case(talent, as-15)
obl(important, talent)
nmpod:poss(talent, a-player's)
punct(important, .)
~~~

It is clear that the material in the complement _as Y_ can be clausal. It is also usually optional, for that reason, we usually make the complement an [advcl](), with the second _as_ analyzed as [mark](). That gives us:

~~~ sdparse
Ես/PRON ավելացրի/VERB այնքան/DET[PronType=Dem] ալյուր/NOUN[SpaceAfter=No] ,/PUNCT որքան/SCONJ ասվում/VERB էր/AUX բաղադրատոմսում/NOUN[SpaceAfter=No] ։/PUNCT \n I put-in as-much flour as was called-for in-the-recipe .
nsubj(ավելացրի, Ես)
det(ալյուր, այնքան)
advcl(այնքան, ասվում)
mark(ասվում, որքան)
aux(ասվում, էր)
obl(ասվում, բաղադրատոմսում)
punct(ավելացրի, ։)
punct(ասվում, ,-5)
nsubj(put-in, I)
det(flour, as-much)
advcl(as-much, called-for)
mark(called-for, as)
aux(called-for, was)
obl(called-for, in-the-recipe)
punct(put-in, .)
~~~

~~~ sdparse
Նա/PRON այնքան/ADV[PronType=Dem] հրապուրիչ/ADJ էր/AUX[SpaceAfter=No] ,/PUNCT որ/SCONJ խմբագիրը/NOUN հիացավ/VERB[SpaceAfter=No] ։/PUNCT \n She was so attractive , that the-editor admired-her .
nsubj(հրապուրիչ, Նա)
cop(հրապուրիչ, էր)
advmod(հրապուրիչ, այնքան)
advcl(այնքան, հիացավ)
mark(հիացավ, որ)
nsubj(հիացավ, խմբագիրը)
punct(հրապուրիչ, ։)
punct(հիացավ, ,-5)
nsubj(attractive, She)
cop(attractive, was)
advmod(attractive, so)
advcl(so, admired-her)
mark(admired-her, that)
nsubj(admired-her, the-editor)
punct(attractive, .)
punct(admired-her, ,-15)
~~~

### Inequality Scalar Comparison

In general, the standard of comparison always depends on an adjective or adverb, and is usually an [advcl]() or [obl]().

~~~ sdparse
Արամը/PROPN շատ/ADV[Degree=Pos] ավելի/ADV[Degree=Cmp] խելացի/ADJ[Degree=Pos] է/AUX[SpaceAfter=No] ,/PUNCT քան/SCONJ թվում/VERB է/AUX[SpaceAfter=No] ։/PUNCT \n Aram is much more smart , than it seems .
nsubj(Արամը, խելացի)
cop(խելացի, է)
advcl(խելացի, թվում)
mark(թվում, քան)
advmod(ավելի, շատ)
advmod(խելացի, ավելի)
punct(թվում, ,-6)
punct(խելացի, ։)
nsubj(Aram, smart)
cop(smart, is)
advcl(smart, seems)
mark(seems, than)
advmod(more, much)
advmod(smart, more)
punct(seems, ,-17)
punct(smart, .)
~~~

~~~ sdparse
շատ/ADV[Degree=Pos] ավելի/ADV[Degree=Cmp] բարդ/ADJ[Degree=Pos] խնդիր/NOUN[SpaceAfter=No] ,/PUNCT քան/SCONJ կարծում/VERB ես/AUX \n much more difficult problem , than you thought
amod(խնդիր, բարդ)
advmod(բարդ, ավելի)
advmod(ավելի, շատ)
advcl(բարդ, կարծում)
mark(կարծում, քան)
aux(կարծում, ես)
punct(կարծում, ,-5)
amod(problem, difficult)
advmod(difficult, more)
advmod(more, much)
advcl(difficult, thought)
mark(thought, than)
punct(thought, ,-14)
~~~

### Ellipsis in Comparative Constructions

Very commonly the complement clause in a comparative undergoes various amounts of partial reduction or ellipsis, sometimes to a quite extreme extent. In general, we treat whatever remnant that remains as still an [advcl]():

~~~ sdparse
Նա/PRON հարբած/VERB[VerbType=Part] ավելի/ADV[Degree=Cmp] լավ/ADJ[Degree=Pos] է/AUX խաղում/VERB[VerbType=Fin] ,/PUNCT քան/SCONJ սթափ/ADJ[Degree=Pos] ։/PUNCT \n He plays better drunk than sober .
nsubj(խաղում, Նա)
аuх(խաղում, է)
acl(Նա, հարբած)
advmod(լավ, ավելի)
advmod(խաղում, լավ)
mark(սթափ, քան)
advcl(լավ, սթափ)
punct(խաղում, ։)
punct(սթափ, ,)
nsubj(plays, He)
acl(He, drunk)
advmod(plays, better)
mark(sober, than)
advcl(better, sober)
punct(plays, .)
~~~

“He plays better when he is drunk than how he plays when he is sober.”

Commonly case is that the adverbial clause as standard of comparison precedes the partially reduced comparee:

~~~ sdparse
Նա/PRON որքան/SCONJ աներկյուղ/ADJ[Degree=Pos] է/AUX ,/PUNCT նույնքան/ADV[PronType=Dem] գեղեցիկ/ADJ[Degree=Pos] ։/PUNCT \n She is as brave as beautiful .
nsubj(գեղեցիկ, Նա)
cop(աներկյուղ, է)
advmod(գեղեցիկ, նույնքան)
advcl(գեղեցիկ, աներկյուղ)
mark(աներկյուղ, որքան)
punct(գեղեցիկ, ։)
punct(գեղեցիկ, ,)
nsubj(beautiful, She)
cop(brave, is)
mark(brave, as-12)
advcl(beautiful, brave)
advmod(beautiful, as-14)
punct(beautiful, .)
~~~

“She is as much beautiful as for how much she is brave.”


### Comparatives (quantity)

In certain contexts the comparative complement combines both the action or adjective that is being compared and the standard of comparison:

* _ավելի քան 90 տոկոս_ “more than 90 percent”
* _ավելի քան վստահելի գործընկեր_ “more than trusted companion”
* _ավելի քան հավանական_ “more than likely”

In these cases we consider more than to be a fixed multi-word expression because the two words are inseparable. One cannot say *more percent than 90*.

~~~ sdparse
Դա/PRON ավելի/ADV քան/SCONJ հավանական/ADJ է/AUX[SpaceAfter=No] ։/PUNCT \n That is more than likely .
nsubj(հավանական, Դա)
nsubj(likely, That)
cop(հավանական, է)
cop(likely, is)
advmod(հավանական, ավելի)
advmod(likely, more)
fixed(ավելի, քան)
fixed(more, than)
punct(հավանական, ։-6)
punct(likely, .-13)
~~~

If the expression modifies a counted noun phrase, it attaches directly to the modified number:

~~~ sdparse
ավելի/ADV քան/SCONJ երկու/NUM տարի/NOUN առաջ/ADP \n more than two years ago
case(տարի, առաջ)
case(years, ago)
advmod(երկու, ավելի)
advmod(two, more)
nummod(տարի, երկու)
nummod(years, two)
fixed(ավելի, քան)
fixed(more, than)
~~~

If there is no number, it attaches directly to the head noun:

~~~ sdparse
ավելի/ADV քան/SCONJ մի/DET քանի/PRON տարի/NOUN առաջ/ADP \n more than a some years ago
case(տարի, առաջ)
case(years, ago)
advmod:emph(տարի, ավելի)
advmod:emph(years, more)
det(տարի, մի)
det(years, a)
fixed(մի, քանի)
fixed(a, some)
fixed(ավելի, քան)
fixed(more, than)
~~~

### Constructions more and less quantity

_Ավել_ / _քիչ_ / _պակաս_ governs the case of the cardinal numeral.

~~~ sdparse
Հարյուրից/NOUN[Case=Abl] ավել/ADJ[Degree=Pos] մարդ/NOUN եկավ/VERB[SpaceAfter=No] :/PUNCT \n Came more-than 100 people .
nsubj(եկավ, մարդ)
nsubj(Came, people)
amod(մարդ, ավել)
amod(people, more-than)
obl(ավել, Հարյուրից)
obl(more-than, 100)
punct(եկավ, :)
punct(Came, .)
~~~

~~~ sdparse
Հարյուրից/NOUN[Case=Abl] քիչ/ADJ[Degree=Pos] մարդ/NOUN եկավ/VERB[SpaceAfter=No] :/PUNCT \n Came less-than 100 people .
nsubj(եկավ, մարդ)
nsubj(Came, people)
amod(մարդ, քիչ)
amod(people, less-than)
obl(քիչ, Հարյուրից)
obl(less-than, 100)
punct(եկավ, :)
punct(Came, .)
~~~

## Noun phrases with quantifiers

### Constructions with numerals and adjectives

If the phrase with a numeral and adjective the numeral modifying the noun takes nominative and the noun is usuall in singular, cf.

~~~ sdparse
երկու/NUM սպիտակ/ADJ նավակ/NOUN[Number=Sing] \n two white boats
nummod(նավակ, երկու)
nummod(boats, two)
amod(նավակ, սպիտակ)
amod(boats, white)
~~~
