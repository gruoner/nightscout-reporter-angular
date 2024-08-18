export https_proxy="http://10.230.1.1:8080"
export http_proxy="http://10.230.1.1:8080"
export NODE_EXTRA_CA_CERTS="/usr/share/ca-certificates/extra/WebProxy-CA.crt"

#npm run build --baseHref /NightScoutReporter-angular
ng build --output-path dist/nightrep --base-href /NightScoutReporter-angular/ --deploy-url /NightScoutReporter-angular/

cp -a dist/nightrep/* /var/www/html/NightScoutReporter-angular

