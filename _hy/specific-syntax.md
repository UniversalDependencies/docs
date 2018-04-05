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
Հնչեցին/VERB Կոմիտասի/PROPN[Case=Dat] երգերից/NOUN[Case=Abl] ։/PUNCT \n Sounded from-songs of-Komitas .
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
Արամը/PROPN ամենախելացի/ADJ[Degree=Sup] ուսանողն/NOUN է/AUX ։/PUNCT \n Aram is the-smartest student .
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
Արամը/PROPN եղբորից/NOUN[Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing] ավելի/ADV[Degree=Cmp] խելացի/ADJ[Degree=Pos] է/AUX ։/PUNCT \n Aram is more smart than-his-brother .
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
Արամը/PROPN ավելի/ADV[Degree=Cmp] խելացի/ADJ[Degree=Pos] է/AUX ,/PUNCT քան/SCONJ եղբայրը/NOUN[Animacy=Inan|Case=Nom|Definite=Def|Number=Sing] ։/PUNCT \n Aram is more smart , than his-brother .

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
Արամը/PROPN ամենից/PRON[Case=Abl|Number=Sing|PronType=Tot] խելացի/ADJ[Degree=Pos] ուսանողն/NOUN է/AUX ։/PUNCT \n Aram is the-smartest student of-all .
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
Նա/PRON ինձնից/PRON[Case=Abl] շատ/ADV[Degree=Pos] է/AUX կարդում/VERB ։/PUNCT \n He is reading more than-me .
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

Note that in Armenian there is an another possibility when the base form of the adjective is used and the fact that it is being compared must be derived from the coding of the other participants, e.g., the standard of comparison.

~~~ sdparse
Արամը/PROPN եղբորից/NOUN[Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing] խելացի/ADJ[Degree=Pos] է/AUX ։/PUNCT \n Aram is smart than-his-brother .
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
Արամը/PROPN բոլորից/PRON[Case=Abl|Number=Sing|PronType=Tot] խելացի/ADJ[Degree=Pos] է/AUX ։/PUNCT \n Aram is smart of-all .
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

In constructions of the form _as X as Y_ or _the same X as Y_, X and Y can be of a range of syntactic types. However, this first _as_ may not modify the head of X, it may modify an existing modifier of the head of X. Its role is adverbial ([advmod]()), consistent with other kinds of degree modification.

We take the complement of the comparative (that is, the standard of comparison) as an oblique dependent of the first part. 

~~~ sdparse
Արամը/PROPN եղբոր/NOUN պես/նման/չափ/ADP խելացի/ADJ[Degree=Pos] է/AUX ։ \n Aram is smart as his-brother .
obl(խելացի, եղբոր)
obl(smart, his-brother)
case(եղբոր, պես)
case(his-brother, as)
~~~

~~~ sdparse
մթին/ADJ[Degree=Pos] ու/CCONJ սառը/ADJ[Degree=Pos] , ինչպես/SCONJ շիրիմ/NOUN \n dark and cold like a-grave
case(շիրիմ, ինչպես)
obl(մթին, շիրիմ)
cc(սառը, ու)
conj(մթին, սառը)
case(a-grave, like)
obl(dark, a-grave)
cc(cold, and)
conj(dark, cold)
~~~

~~~ sdparse
Նպատակասլացությունը/NOUN նույնքան/ADV[PronType=Dem] կարևոր/ADJ[Degree=Pos] է/AUX , որքան/SCONJ խաղացողի/NOUN տաղանդը/NOUN ։ \n Commitment is as important as a-player's talent .
advmod(կարևոր, նույնքան)
advmod(important, as-13)
case(տաղանդը, որքան)
case(talent, as-15)
obl(կարևոր, տաղանդը)
obl(important, talent)
~~~

It is clear that the material in the complement _as Y_ can be clausal. It is also usually optional, as indicated above. For that reason, we usually make the complement an [advcl](), with the second _as_ analyzed as [mark](). That gives us:

~~~ sdparse
Ես/PRON ավելացրի/VERB այնքան/ADV[PronType=Dem] ալյուր/NOUN , որքան/SCONJ ասվում/VERB էր/AUX բաղադրատոմսում/NOUN ։ \n I put in as-much flour as was called-for in-the-recipe .
amod(ալյուր, այնքան)
amod(flour, as-much)
advcl(այնքան, ասվում)
advcl(as-much, called-for)
mark(ասվում, որքան)
mark(called-for, as)
~~~

~~~ sdparse
Նա/PRON այնքան/ADV[PronType=Dem] հրապուրիչ/ADJ էր/AUX , որ/SCONJ խմբագիրը/NOUN հիացավ/VERB ։ \n She was so attractive , that the-editor admired her.
advmod(հրապուրիչ, այնքան)
advmod(attractive, so)
advcl(այնքան, հիացավ)
advcl(so, admired)
mark(հիացավ, որ)
mark(admired, that)
~~~

### Inequality Scalar Comparison

If a property is compared to a clause, the clause is attached as [advcl]() instead of [obl]()
and the conjunction _(քան)_ is attached to the subordinate clause as [mark]().

~~~ sdparse
Արամը/PROPN շատ/ADV ավելի/ADV[Degree=Cmp] խելացի/ADJ[Degree=Pos] է/AUX , քան/SCONJ թվում/VERB է/AUX ։ \n Aram is much more smart , than it seems .
advcl(խելացի, թվում)
advcl(smart, seems)
mark(թվում, քան)
mark(seems, than)
advmod(ավելի, շատ)
advmod(more, much)
advmod(խելացի, ավելի)
advmod(smart, more)
~~~

~~~ sdparse
շատ/ADV ավելի/ADV[Degree=Cmp] բարդ/ADJ[Degree=Pos] խնդիր/NOUN , քան/SCONJ կարծում/VERB ես \n much more difficult problem , than you thought
amod(խնդիր, բարդ)
amod(problem, difficult)
advmod(բարդ, ավելի)
advmod(difficult, more)
advmod(ավելի, շատ)
advmod(more, much)
advcl(բարդ, կարծում)
advcl(difficult, thought)
mark(կարծում, քան)
mark(thought, than)
~~~

### Ellipsis in Comparative Constructions

Very commonly the complement clause in a comparative undergoes various amounts of partial reduction or ellipsis, sometimes to a quite extreme extent. If the head is elided, then the functional element can be promoted:

~~~ sdparse
Նա/PRON որքան/SCONJ աներկյուղ/ADJ[Degree=Pos] էր/AUX , նույնքան/ADV[PronType=Dem] գեղեցիկ/ADJ[Degree=Pos] ։ \n She is as brave as beautiful .
advmod(աներկյուղ, որքան)
advmod(brave, as-12)
advcl(աներկյուղ, գեղեցիկ)
advcl(brave, beautiful)
mark(գեղեցիկ, նույնքան)
mark(beautiful, as-14)
~~~

“She is as much brave as for how much she is beautiful.”

~~~ sdparse
Նա/PRON հարբած/VERB[VerbType=Part] ավելի/ADV լավ/ADJ[Degree=Pos] է/AUX խաղում/VERB[VerbType=Fin] , քան/SCONJ սթափ/ADJ[Degree=Pos] ։ \n He plays better drunk than sober .
nsubj(խաղում, Նա)
аuх(խաղում, է)
acl(Նա, հարբած)
advmod(լավ, ավելի)
advmod(խաղում, լավ)
mark(սթափ, քան)
advcl(լավ, սթափ)
nsubj(plays, He)
acl(He, drunk)
advmod(plays, better)
mark(sober, than)
advcl(better, sober)
~~~

“He plays better when he is drunk than how he plays when he is sober.”

### Comparatives (quantity)

In certain contexts the comparative complement combines both the action or adjective that is being compared and the standard of comparison:

* _ավելի քան 90 տոկոս_ “more than 90 percent”
* _ավելի քան վստահելի գործընկեր_ “more than trusted companion”
* _ավելի քան հավանական_ “more than likely”

In these cases we consider more than to be a fixed multi-word expression because the two words are inseparable. One cannot say *more percent than 90*.

~~~ sdparse
Դա/PRON ավելի/ADV քան/SCONJ հավանական/ADJ է/AUX ։ \n That is more than likely .
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

_Ավելի_ / _քիչ_ / _պակաս_ governs the case of the cardinal numeral.

~~~ sdparse
Հարյուրից/NOUN[Case=Abl] ավելի/ADV մարդ/NOUN եկավ/VERB : \n Came more-than 100 people .
nsubj(եկավ, մարդ)
nsubj(Came, people)
nmod(մարդ, Հարյուրից)
nmod(people, 100)
case(Հարյուրից, ավելի)
case(100, more-than)
~~~

~~~ sdparse
Հարյուրից/NOUN[Case=Abl] քիչ/NOUN մարդ/NOUN եկավ/VERB : \n Came less-than 100 people .
nsubj(եկավ, մարդ)
nsubj(Came, people)
nmod(մարդ, Հարյուրից)
nmod(people, 100)
case(Հարյուրից, քիչ)
case(100, less-than)
~~~

## Noun phrases with quantifiers

### Constructions with cardinal numerals

See [flat]() and [compound]() on the compound numerals.

Other types of QP:

* _երկու.Nom ամբողջ.Nom.Sg չորս.Nom տասն(եր)որդական.Nom.Sg միլիոն.Nom.Sg դրամ.Nom.Sg_ “2.4 million drams” (i.e. “four tenth parts of million” with the ellipsis of “parts”)

~~~ sdparse
երկու ամբողջ չորս տասնորդական միլիոն դրամ \n two whole-parts four tenth million drams
nummod(դրամ, միլիոն)
nummod(drams, million)
nummod(միլիոն, ամբողջ)
nummod(million, whole-parts)
nummod(տասնորդական, չորս)
nummod(tenth, four)
nummod(ամբողջ, երկու)
nummod(whole-parts, two)
conj(ամբողջ, տասնորդական)
conj(whole-parts, tenth)
~~~

### Constructions with numerals and adjectives

If the phrase with a numeral and adjective the numeral modifying the noun takes nominative and the noun is usuall in singular, cf.

~~~ sdparse
երկու/NUM սպիտակ/ADJ նավակ/NOUN[Number=Sing] \n two white boats
nummod(նավակ, երկու)
nummod(boats, two)
amod(նավակ, սպիտակ)
amod(boats, white)
~~~
