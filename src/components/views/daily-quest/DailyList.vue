<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Daily Quests List</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    1 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#absensi"/>
                                </h3>
                                <p>Absensi</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/dailyAbsensi" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    1 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#bbc"/>
                                </h3>
                                <p>BBC</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/dailybbc" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    1 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#vlc"/>
                                </h3>
                                <p>VLC</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/dailyvlc" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    1 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#share"/>
                                </h3>
                                <p>Share Social Media</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/dailyshare" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    2 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#cermi"/>
                                </h3>
                                <p>Cermi</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/dailycermi" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    2 POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" data-target="#ltai"/>
                                </h3>
                                <p>LTAI</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link to="/dailyltai" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="absensi">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Absensi</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="bbc">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">BBC</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="vlc">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">VLC</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="share">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Share Media Social</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="cermi">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">CerMi</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="ltai">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">LTAI</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>