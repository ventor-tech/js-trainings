import json
import time
from odoo import http
from odoo.http import request
# from odoo.addons.web.controllers.main import Home


class JSTest(http.Controller):

    @http.route('/jstest', type='http', auth="none")
    def jstest(self):
        return request.render('js_trainings.jstest_main')

    @http.route('/jstest/form/post', type='http', auth="none")
    def jstest_post(self):
        # https://github.com/odoo/odoo/blob/15.0/addons/website_hr_recruitment/data/config_data.xml#L21
        # https://github.com/odoo/odoo/blob/15.0/addons/website_hr_recruitment/models/hr_recruitment.py#L28
        # https://github.com/odoo/odoo/blob/15.0/addons/website_hr_recruitment/views/website_hr_recruitment_templates.xml#L141
        return request.render('js_trainings.post', {
            'countries': request.env['res.country'].search_read(
                [], ['id', 'name']
            )
        })

    @http.route('/jstest/form/get', type='http', auth="none")
    def jstest_get(self):
        return request.render('js_trainings.get', {
            'countries': request.env['res.country'].search_read(
                [], ['id', 'name']
            )
        })

    @http.route('/jstest/ajax', type='http', auth="none")
    def jstest_ajax(self):
        return request.render('js_trainings.ajax')

    @http.route('/jstest/deferred', type='http', auth="none")
    def jstest_deferred(self):
        return request.render('js_trainings.deferred')

    @http.route('/jstest/asyncawait', type='http', auth="none")
    def jstest_asyncawait(self):
        return request.render('js_trainings.asyncawait')

    @http.route('/jstest/countries', type='http', auth="none")
    def jstest_get_countries(self):
        time.sleep(4)
        return request.make_response(json.dumps(
            request.env['res.country'].search_read(
                [], ['id', 'name']
            )
        ))

    @http.route('/jstest/countries/json', type='json', auth="none")
    def jstest_get_countries_json(self):
        time.sleep(4)
        return request.env['res.country'].search_read([], ['id', 'name'])

    @http.route('/jstest/teams', type='http', auth="none")
    def jstest_get_teams(self):
        time.sleep(1.7)
        return request.make_response(json.dumps(
            request.env['crm.team'].sudo().search_read(
                [], ['id', 'name']
            )
        ))

    @http.route('/jstest/teams/json', type='json', auth="none")
    def jstest_get_teams_json(self):
        time.sleep(1.7)
        return request.env['crm.team'].sudo().search_read([], ['id', 'name'])
