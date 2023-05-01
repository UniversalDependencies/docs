---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "ky/dep/aux.html"
udver: '2'
---
In Kyrgyz the verbs "жат-" and as a suffix at the end of a sentence "элек" , "эле"  may function as auxiliary verbs.
We (currently) use the `AUX` at the end of a sentence.

The dependency label indicates their use (auxiliary, copula or content verb).


~~~ sdparse
мектептердин курулушу кандай жүрүп жатат? \n How is the construction of schools going?
aux(жүрүп, жатат)
~~~

~~~ sdparse
Жамгыр жаап жатат деп ойлойм. \n I think it's raining. .
aux(жаап, жатат)
~~~

~~~ sdparse
Караколдо жашы жете элек 12 бала эмгекке тартылган? . \n 12 underage children were forced to work in Karakol?
aux(жете, элек)
~~~


